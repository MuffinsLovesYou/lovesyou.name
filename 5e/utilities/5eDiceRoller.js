

	function DiceRoller_Load(config){
		config = config || {};
		config.dev = true;
		let d = new DiceRoller(config);
		return d;
	}
	

	function DiceRoller(config){
		let roller = this;
		let dev = (config && config.dev)||false;// Development mode for debugging and testing
		let log = (x) => { if(dev){ console.log(x); } }
		
		log('Initializing DiceRoller');
		roller.Controls = {
			Input : document.getElementById('DiceRoller_Input')/*text type input*/
			,Button : document.getElementById('DiceRoller_Button')/*button type input*/
			,Output : document.getElementById('DiceRoller_Output')/*text area*/
		}
		for (let i in roller.Controls){ log('control ' + roller.Controls[i].id + ' found'); }
		roller.Controls.Output.value = '';
		roller.Controls.Input.value = '--help--';
		roller.Controls.Input.style.fontStyle = 'italic'
		roller.Controls.Input.onkeydown = function(e){ if((e.keyCode||e.which)===13){ roller.handleInput(); } }
		roller.Controls.Button.onclick = function(){ roller.handleInput(); }

		/*regex pattern collection for our string searching*/
		roller.Regex = {
			Dice : /[\d]{0,}[d][\d]{1,}/g /* examples 1d6 4d4 d6 d12  */
			,Addition : /-?\d{1,}[+]-?\d{1,}/g /* examples 1+1 4+6 */
			,Subtraction : /[^+][-]/g /* example 1-1 4-6 excludes + specifically because of how we handle subtraction*/
			,Repeat : /[\d]{1,}[x][\d]{0,}[d][\d]{1,}/g  /* examples: 4x1d6 2xd20 */
		}

		// main IO function 
		roller.handleInput = function(){
			let input = roller.Controls.Input.value.toLowerCase();
			let output = '';
			switch(input){
				case 'test': roller.test(); break;
				case 'log_state': console.log(roller.toString()); break;
				case 'averages': output = roller.getAverages(); break;
				case 'help' :
				case '--help--':
				case '':
					output = roller.help(); break;
				case 'examples': output = roller.examples(); break;
				default : 
					let solved = roller.solve(input)
					output = solved+'\n';
				break;
			}
			roller.Controls.Output.value = output + roller.Controls.Output.value;
		} 
		
		roller.orderofoperations = ['Repeat','Dice','Subtraction','Addition'];
		/* top level function for resolving input equation */
		roller.solve = (equation) => {
			log('Solving for: ' + equation);
			for(let i in roller.orderofoperations){
				let operation = roller.orderofoperations[i];
				equation = roller.operations[operation].resolve(equation);
			}
			log('Printing result: ' + equation); 
			return equation;
		}
		
	
		roller.rolls = { }
		
		/*  usage: let op = new operation(...)
			pattern: regex pattern to find specified operators and operands
			expression: delegate function to perform on found values */
		roller.Operation = function(pattern, expression){
			let op = this;
			op.pattern = pattern; 
			
			// Top level 'main' function of an operation()
			op.resolve = function(input){
				if(!op.pattern) { log('no regex found in operation'); }
				
				let rgx = new RegExp(op.pattern); 
				let get = null; 
				while((get = rgx.exec(input)) !== null){ // Search for any matches
					log('Found match for pattern: '+op.pattern+' in '+input)
					let terms = op.getTerms(get[0]);// get meaningful parameters 
					log('Extracted terms: ' + terms)
					let x = terms[0],y = terms[1];// 'destructure' the return array 
					let value = op.expression(x,y);// evaluate our local expression
					log('evaluated for: ' + value);
					input = input.replace(get[0], value);// replace in origin string
					rgx.lastIndex = rgx.lastIndex-get[0].length;
					log('returning new input: '+input);
				}
				return input;
			}
			
			/* attempt to extract usable parameters for expression() 
				returns: parameter array to be consumed by expression(...) */
			op.getTerms = function(match){
				let terms = match.split(/[^-\d]/g);// split on digits
				for(let i in terms){ terms[i]=parseInt(terms[i]||0)}
				return terms;
			}
			
			op.expression = expression || (()=>{ log('no function found in operation'); })
		}

		// a bit of a complex way of handling this, but it makes the thing more extensible 
		// and modifiable from inside and out. 
		roller.operations = {};
		
		roller.operations.Addition = new roller.Operation(roller.Regex.Addition, (x,y)=>x+y);
		
		// Subtraction is a special case. We replace all subtraction symbols
		// between numbers with +- (plus a negative) then let addition handle them.
		let subtraction = new roller.Operation(roller.Regex.Subtraction);
		subtraction.getTerms = (m)=>{ return [m]; }
		subtraction.expression = (x)=>{ return x.replace('-','+-'); }
		roller.operations.Subtraction = subtraction;
		

		let diceRoll = new roller.Operation(roller.Regex.Dice);
		diceRoll.expression = (rolls, facets) => {
			if(rolls===0){ rolls++; } /* e.g. translate d4 to 1d4 */
			let value = 0;
			if(!roller.rolls[facets]){roller.rolls[facets] = []; }
			for(let i = 0; i < rolls ; i++){
				let roll = Math.floor((Math.random()*facets)+1);
				roller.rolls[facets].push(roll);
				value += roll;
			}
			return value;
		}
		roller.operations.Dice = diceRoll;
	

		// Seeks patterns like 2xd20 where 2x specifies roll the d20 twice and put 
		// the results into an array [] rather than add them together.
		let repeater = new roller.Operation(roller.Regex.Repeat);
		// Gets the repeat count (nx) and the dice pattern to repeat
		repeater.getTerms = (match) => {
			let terms = match.split('x');
			terms[0] = parseInt(terms[0]);
			return terms;
		}
		// Fills an array with the results of separate dice rolls. 
		repeater.expression = (repeatcount,diceexpression) => {
			let arr = [];
			for(let i = 0; i < repeatcount; i++){
				let resolve = roller.solve(diceexpression);
				arr.push(parseInt(resolve));
			}
			arr = arr.sort((x,y)=>x<y);
			return '['+arr+']';
		}
		roller.operations.Repeat = repeater;
	}

	

	/* Migrating ui/helper methods out of the main body to keep them separate from the base logic */
	DiceRoller.prototype.help = function(){
		let helpMessage = '\
Commands: \n\
help : commands list \n\
examples : example rolls \n\
averages : average rolls \n\
		';
		return helpMessage;
	}
	DiceRoller.prototype.examples = function(){
		let examples = '\
Valid die rolls: \n\
1d6 : roll one six-sided die\n\
d6 : roll one six-sided die\n\
d10 : ten sided die\n\
2d4 : roll two dice\n\
d20+4: add to roll\n\
2d6-2: subtract from roll\n\
d20+2d6: add die rolls\n\
2xd20: roll twice, keep rolls separate\n\
';
		return examples;
	}

	DiceRoller.prototype.getAverages = function(){
		let roller = this;//alert(this)
		/* Average roll value by die for a given session. */
		let returnValue = ''
		for(let facet in roller.rolls){
			let sum = 0;
			let arr = roller.rolls[facet];
			for(let i = 0; i <arr.length;i++){sum+=arr[i];}
			let avg = (arr.length>0) ? sum/arr.length : 0;
			avg = Math.floor(avg*100)/100;
			if(avg > 0){
				returnValue += 'Average roll for d' + facet + ' is ' + avg + ' across ' + arr.length + ' rolls.\n'; }
		}
		return returnValue;	
	}
	DiceRoller.prototype.toString = function(){
		return JSON.stringify(this);
	}