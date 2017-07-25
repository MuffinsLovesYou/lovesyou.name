
	let LYDice_Config = {
		dev : false
	}


	let LYDice = function(config){
		let roller = this;
		roller.config = config || { dev:true };
		let dev = roller.config.dev || false;// Development mode for debugging and testing
		let log = (x) => { if(dev){ console.log(x); } };
		
		roller.controls = {}
		// Initialization of UI controls if present.
		roller.onDOMContentLoaded = roller.init;
		roller.init = function(){
			log('Initializing DiceRoller controls.');
			roller.controls.input = document.getElementById('DiceRoller_Input')/*text type input*/
			roller.controls.button = document.getElementById('DiceRoller_Button')/*button type input*/
			roller.controls.output = document.getElementById('DiceRoller_Output')/*text area*/

			if(!roller.controls.input || !roller.controls.output || !roller.controls.button)
				return log('Could not identify controls needed for UI');
			
			let handleInput = ()=>{
				let input = roller.controls.input.value.toLowerCase();
				let output = roller.resolve(input);
				roller.controls.output.value = output + roller.controls.output.value;
			}

			roller.controls.input.placeholder = '--help--'; 
			roller.controls.input.onkeydown = (e)=>{ if((e.keyCode||e.which)===13){ handleInput(); } }
			roller.controls.button.onclick = handleInput 
			roller.controls.output.value = ''; 			
		}

		// TODO: we may need something smarter than just returning a value and concatenating it in. 
		// There may need to be a return function possibility.

		// Loops over the roller's commands and applies them to input equation
		roller.resolve = function(equation){
			let result = '';
			for(let c=0; c< roller.commands.order.length; c++){
				let order = roller.commands.order[c];
				let command = roller.commands[order];
				if(!command || !command.search){ continue; }
				if(command.search(equation)){
					let r = command.execute(equation);
					result += r.value;
					if(r.break) { break; }
				}
			}
			return result;
		}

		/* Commands execute in the order they have been added.
		search: a search function or value to look for, returns boolean
		execute: code to execute if value is found
		description: what the command does (text for 'help' command) */
		roller.Command = function(search, execute, description){
			let com = this;
			
			com.search = (typeof(search)==='function') ? 
				search :
				(i) => { return i.includes(search); };
			
			com.execute = function(input){
				let value = execute(input);

				// this feels hacky, lets think clearly about how we want to be returning values.
				if(typeof(value)!== 'object') { value = { 'value' : value, 'break' : true }; }
				return value;	
			}	

			com.description = description||'';
		}

		// Commands are stored by name and their order of operations is preserved via array
		roller.commands = {order : []};
		/*	name: a key for the command to be stored under 
			command: a roller.Command object */
		roller.commands.add = function(name, command){
			roller.commands.order.unshift(name);
			roller.commands[name] = command;
		}

		/* Default command: solve
			Silently invoked command that calls roller.solve(i) that processes dice input. */ 
		roller.commands.add('solve',new roller.Command(()=>{return true;}, (input)=>{
			let solved = '';
			solved = roller.solve(input);
			return { 'value':solved+'\n', 'break':false };
		}));

		/*  Last command to run and core of the dice roller.
			loops through operations in order and resolves them against the input */
		roller.solve = function(equation) {
			log('Solving for: ' + equation);
			// an object to store the state and steps of the input as it is procesed
			let eq = { 
					input: equation, // unmodified input 
					working: equation, // input as it is modified step-by-step 
					//output_funcs : [], 
					get_output : null,
					output : null
			};
			eq.get_output = ()=>{
				//eq.output_funcs.forEach((f)=>{ f(); });
				eq.output = eq.working;
			}
			roller.operations.order.forEach((o)=>{ eq = roller.operations[o].resolve(eq); });
			
			eq.get_output();
			log('Returning result: ' + eq.output); 
			return eq.output;
		}

		let helpfunc =()=>{
			let helpMessage = 'Commands:\n';
			roller.commands.forEach((com, c)=>{
				if(c==='solve'||!com.execute) return;
				helpMessage += c + ': ' + (command.description||'')+'\n';
			});
			return helpMessage;
		}
		let help = new roller.Command('help', helpfunc, 'Displays this message');
		roller.commands.add('help', help);
	

		// TODO: better tracking and record keeping. 
		roller.rolls = { }
		
		/*  seek a value, parse it, and alter operation
			search : what to look for
				a function, regex, or value to look for and return if found
			execute: what to do with what is found
		*/
		roller.Operation = function(search, execute){
			let op = this;	
			
			op.search = function(input){
				if(typeof(search)==='function'){ return search(input); }
				if(['string','number'].includes(typeof(search))){ search = new RegExp(''+search); }
				if(search.exec){ search.lastIndex=0; return search.exec(input); }
				return null;// could not interpret search
			}

			/*  parse the return value of search into parameters for execute
				default behavior: it is looking for one or two integers 
				and one non-integer symbol 
				returns: a 3-item array [int||null, int, symbol] */
			op.get_terms = function(match){
				let digits = [], get = null;
				let d = /(-?\d+)/g; // find positive or negative integer

				while((get = d.exec(match)) !== null)
					digits.push(+get[0]);
				// if we found just one integer, digits = [null, int]
				if(digits.length===1){ digits.unshift(null) }; 
				
				let nd = /[^-\d]/; // any symbol that isn't a digit or - 
				get = nd.exec(match);
				// if we are subtracting i.e. 3-4 this converts it to 3+-4
				let symbol = get ? get[0] : '+';

				return digits.concat(symbol);
			}

			// no default code for execute, it accepts the parameters from get_terms
			op.execute = execute || (()=>{ log('no function found in operation'); })

			op.resolve = function(eq){
				let get = null;
				while((get = op.search(eq.working)) !== null){// search for pattern match
					log('Found match, beginning operation on input string.')

					let terms = op.get_terms(get);
					log('Retrieved terms: ' + terms);
					
					let value = op.execute.apply(op, terms);
					log('Evaluated for: ' + value);

					eq.working = eq.working.replace(get,value);
				}
				return eq;
			}
		}

		roller.operations = { order : [] };

		/*	name: key to store the operation under
			operation(required): Operation() object */
		roller.operations.add = function(name, operation){
			let ops = roller.operations;
			// operations are executed as a stack (first in last out)
			// The exception to this is the base dice-roll which is preserved as first to execute
			if(name==='Dice') { roller.operations.order.push(name); }
			else { roller.operations.order.splice(1,0,name); }
			roller.operations[name] = operation;
		}

		/*	Default dice-roll operation
			matches patterns d# (i.e. d4, d6) or #d# (1d6, 3d4) */
		let dice_roll = new roller.Operation(/[\d]{0,}[d][\d]{1,}/g);
		dice_roll.execute = (rolls, facets) => {
			if(!rolls){ rolls=1; } // e.g. translate d4 to 1d4 
			let value = 0;
			if(!roller.rolls[facets]){ roller.rolls[facets] = []; }
			for(let i = 0; i < rolls ; i++){
				let roll = Math.floor((Math.random()*facets)+1);
				roller.rolls[facets].push(roll);
				value += roll;
			}
			return value;
		}
		roller.operations.add('Dice', dice_roll);
		return roller;
	}

	let DiceRoller = new LYDice(LYDice_Config);

	/* Math module: extends roller with basic PEMDAS operations */
	(()=>{
		DiceRoller.operations.add('AddSubtract', new DiceRoller.Operation(
			/-?\d+[+-]\d+/g, 
			(x,y)=>x+y 
		));

		DiceRoller.operations.add('MultiplyDivide', new DiceRoller.Operation(
			/-?\d+[*//]-?\d+/g,
			(x,y,z)=>{ return z==='*' ? x*y : (x/y).toFixed(2); }
		));

		DiceRoller.operations.add('Exponents', new DiceRoller.Operation(
			/-?\d+\^-?\d+/g,
			(x,y)=>Math.pow(x,y)
		));

		let parens = new DiceRoller.Operation(
			/\([^()]+\)/g,
			(x)=>{ return DiceRoller.solve(x); }
		);
		parens.get_terms = (match)=>{
			match = match[0].replace(/[()]/g, '');
			return [match];
		}
		DiceRoller.operations.add('Parentheses', parens);
	})();



	/* D&D 5e module */
	(()=>{

		// Advantage/Disadvantage rolls follow the rules 'roll a d20 twice and pick the highest/lowest result'
		// designate this with the nx prefix before a dx dice roll.  i.e. 2xd20
		// we roll the dice separately and return the results in an array sorted high-to-low
		let advantage = new DiceRoller.Operation(
			/\d+xd\d+/g, // matches nxdn pattern i.e. 2xd20 or 5xd6
			(x,y)=>{ let arr = []; for(let i = 0; i < x; i++){ arr.push(+DiceRoller.solve(y)); } return arr.sort((x,y)=>+x<+y) }
		);
		advantage.get_terms = (match) => {
			let repeat = /\d+/.exec(match)[0];
			let dice = /d\d+/.exec(match)[0];
			return [repeat,dice,];
		}
		// this precedes dice rolling, so we bypass the normal .add() function
		DiceRoller.operations.order.unshift('Advantage');
		DiceRoller.operations['Advantage'] = advantage;

		// crits, 
		// rerolls 


	})()

	