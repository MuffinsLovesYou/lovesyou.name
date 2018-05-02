define([
    'lite'
    ,'dice'
    ,'scripts/homerolled/dice/modules/math'
    ,'scripts/homerolled/dice/modules/5e'
    ,'scripts/homerolled/dice/modules/logging'
], function (Lite, DiceRoller, math, dnd, LoggingRoller) {

    return Lite.extend({
        content_url : 'site/common/dice/dice.html'
        , onContentBound : function() {
            let view = this;
            view.initialize_roller();
            view.bind_button_click();
            view.bind_keydown();
        }
        , initialize_roller : function(){
            let view = this;
            view.roller = new LoggingRoller();
            window.roller = view.roller;
            view.roller.operations.add(math);
            view.roller.operations.insert(0, dnd[0]);
        }
        , elements :  {}
        , getElementById : function(id){
            if(!this.elements[id]) this.elements[id] = document.getElementById(id);
            return this.elements[id];
        }
        , bind_button_click : function(){
            let view = this;
            let button = view.getElementById('DiceRoller_Button');
            button.addEventListener('click', (e)=>{ view.roll_dice(); });
        }
        , bind_keydown : function(){
            let view = this;
            let input = view.getElementById('DiceRoller_Input');
            input.addEventListener('keydown', (e)=>{
                if(e.keyCode==13)view.roll_dice();
            });
        }
        , roll_dice : function(){
            let view = this;
            let input = view.getElementById('DiceRoller_Input');
            let results = view.roller.solve(input.value);
            view.output_dice_results(results);
        }
        , output_dice_results : function(results){
            let view = this;
            let output = view.getElementById('DiceRoller_Output');
            output.value = results+'\n'+output.value;
            let logger = view.getElementById('DiceRoller_Logging_Output');
            let solution = view.roller.log.solutions[view.roller.log.solutions.length-1];
            logger.value = view.get_solution_dice(solution) + '\n' + logger.value;
        }
        , get_solution_dice : function(solution){
            return solution.operations.filter(operation=>{
                return operation.name === 'Dice'
            })[0].dice.map(dice=>{
                return dice.input+'('+ dice.rolls.map(die=>die.output).join('+') +')'
            }).join(' '); 
        }
    });
});

/*
let get_dice_string = function(dice_op){
        let die_string = dice_op.dice.map(dice =>{
            return dice.input + '=' + dice.rolls.map(die=>die.output).join('+')
        }).join();
        return dice_op.output + '(' + die_string + ')';
    }
*/