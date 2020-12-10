import { lite } from '../../../scripts/homerolled/lite.js';
import { DiceRoller, MathModule, DnDModule, LoggingModule } from '../../../scripts/homerolled/dice.js';
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
    , initializeRoller : function() {
        let view = this;
        view.roller = new DiceRoller({ modules : [MathModule, DnDModule, LoggingModule]}); 
    }
    , buildTable : function() {
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
    , getElementById : function(id) {
        if(!this.elements[id]) { this.elements[id] = document.getElementById(id); }
        return this.elements[id];
    }
    , bindButtonClick : function() {
        let view = this;
        let button = view.getElementById('dice-button');
        button.addEventListener('click', (e) => { view.rollDice(); });
    }
    , bindKeydown : function() {
        let view = this;
        let input = view.getElementById('dice-input');
        input.addEventListener('keydown', (e) => {
            if(e.keyCode == 13) { view.rollDice(); }
        });
    }
    , rollDice : function() {
        let view = this;
        let input = view.getElementById('dice-input');
        view.roller.solve(input.value);

        let log = view.roller.log.slice(-1)[0];
        view.logOutput(view.formatOutput(log));
    }
    , formatOutput : function(log) {
        let output = {};
        console.log(log);
        output.solution = log.solution;
        let diceOp = log.operations.find(op => op.name == 'dice');
        output.rolls = diceOp.resolve.map(res => {
            res.rolls.sort((a, b) => a<=b);
            return res.operands.join('d') + ': (' + res.rolls.join(', ') + ')';
        }).join(', ')
        
        return output;
    }
    , rolls : []
    , logOutput : function(output) {
        let view = this;
        view.rolls.unshift({ 
            Result : output.solution, 
            Rolls : output.rolls 
        });
        view.buildTable();
    }
});
export let Dice = view;
