import { lite } from '../../../scripts/homerolled/lite.js';
import { DiceRoller } from '../../../scripts/homerolled/dice/dice.js';
import { math } from '../../../scripts/homerolled/dice/modules/math.js';
import { dnd } from '../../../scripts/homerolled/dice/modules/5e.js';
import { LoggingRoller } from '../../../scripts/homerolled/dice/modules/logging.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';

export let view = lite.extend({
    contentUrl : 'site/common/dice/dice.html'
    , onContentBound : function() {
        let view = this;
        view.initializeRoller();
        view.buildTable();
        view.bindButtonClick();
        view.bindKeydown();
    }
    , initializeRoller : function(){
        let view = this;
        view.roller = new LoggingRoller();
        view.roller.operations.add(math);
        view.roller.operations.insert(0, dnd[0]);
    }
    , buildTable : function(){
        let view = this;
        new Gridify({
            container : 'dice-output-table', 
            columns : [ 
                { 
                    field : 'Result', 
                    header : 'Results',
                    style : 'width:100px;text-align:left;border-bottom:none' 
                }, 
                { 
                    field : 'Rolls',
                    header : 'Rolls', 
                    style : 'width:100px;text-align:left;border-bottom:none' } 
            ],
            data : view.rolls,
            style : 'border: solid-thin-black;'
        });
    }
    , elements :  {}
    , getElementById : function(id){
        if(!this.elements[id]) this.elements[id] = document.getElementById(id);
        return this.elements[id];
    }
    , bindButtonClick : function(){
        let view = this;
        let button = view.getElementById('dice-button');
        button.addEventListener('click', (e)=>{ view.rollDice(); });
    }
    , bindKeydown : function(){
        let view = this;
        let input = view.getElementById('dice-input');
        input.addEventListener('keydown', (e)=>{
            if(e.keyCode==13)view.rollDice();
        });
    }
    , rollDice : function(){
        let view = this;
        let input = view.getElementById('dice-input');
        view.roller.solve(input.value);
        let solution = view.roller.log.solutions[view.roller.log.solutions.length-1];
        view.logOutput(solution);
    }
    , getResults : function(solution){
        return solution.operations.map(operation=>{
            if(!operation.dice) return '';
            return operation.dice.map(dice=>{
                return dice.input+'('+ dice.rolls.map(die=>die.output).join('+') +')'
            }) 
        }).join(' ');
    }
    , rolls : []
    , logOutput : function(solution){
        let view = this;
        view.rolls.unshift({ 
            Result : solution.output, 
            Rolls : view.getResults(solution) 
        });
        view.buildTable();
    }
});
export let Dice = view;
