define([
    'lite'
    ,'dice'
    ,'scripts/homerolled/dice/modules/math'
    ,'scripts/homerolled/dice/modules/5e'
], function (Lite, DiceRoller, math, dnd) {

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
            view.roller = new DiceRoller();
            view.roller.operations.add(math);
            view.roller.operations.insert(0, dnd[0]);
        }
        , bind_button_click : function(){
            let view = this;
            let button = document.getElementById('DiceRoller_Button');
            button.addEventListener('click', (e)=>{ view.roll_dice(); });
        }
        , bind_keydown : function(){
            let view = this;
            let input = document.getElementById('DiceRoller_Input');
            input.addEventListener('keydown', (e)=>{
                if(e.keyCode==13)view.roll_dice();
            });
        }
        , roll_dice : function(){
            let view = this;
            let input = document.getElementById('DiceRoller_Input');
            let output = document.getElementById('DiceRoller_Output');
            let results = view.roller.solve(input.value);
            output.value = results + '\n' + output.value;
        }
    });
});