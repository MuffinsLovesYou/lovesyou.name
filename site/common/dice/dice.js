define([
    'lite'
    ,'dice'
    ,'scripts/homerolled/dice/modules/math'
    ,'scripts/homerolled/dice/modules/5e'
    ,'scripts/homerolled/dice/modules/logging'
    ,'scripts/homerolled/gridify'
], function (lite, DiceRoller, math, dnd, LoggingRoller, Gridify) {

    return lite.extend({
        content_url : 'site/common/dice/dice.html'
        , onContentBound : function() {
            let view = this;
            view.initialize_roller();
            view.initialize_table();
            view.bind_button_click();
            view.bind_keydown();
        }
        , initialize_roller : function(){
            let view = this;
            view.roller = new LoggingRoller();
            view.roller.operations.add(math);
            view.roller.operations.insert(0, dnd[0]);
        }
        , initialize_table : function(){
            let view = this;
            let grid = new Gridify('DiceRoller_Output_Table')
            grid.initialize({
                data : view.rolls,
                columns : [
                    { field : 'Result', style : 'width:100px;text-align:left;border-bottom:none',},
                    { field : 'Rolls',style: 'width:200px;text-align:left;border-bottom:none' }
                ],
                style : 'border:solid-thin-black;'
            });
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
            view.roller.solve(input.value);
            let solution = view.roller.log.solutions[view.roller.log.solutions.length-1];
            view.log_output(solution);
        }
        , get_solution_dice : function(solution){
            return solution.operations.map(operation=>{
                if(!operation.dice) return '';
                return operation.dice.map(dice=>{
                    return dice.input+'('+ dice.rolls.map(die=>die.output).join('+') +')'
                }) 
            }).join(' ');
        }
        , rolls : []
        , log_output : function(solution){
            let view = this;
            view.rolls.unshift({ 
                Result : solution.output, 
                Rolls : view.get_solution_dice(solution) 
            });
            view.initialize_table();
        }
    });
});

