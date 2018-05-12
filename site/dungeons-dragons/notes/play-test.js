define([
    'lite'
    ,'site/common/dice/dice'
    ,'site/dungeons-dragons/elements/monsterbox/monsterbox'
    ,'5e/monsters'
], (Lite, Dice, MonsterBox, monsters)=>{
    
    console.log('a');
    return Lite.extend({
        content : `
        <div style='width:45%;display:inline-block;vertical-align:top'>
            <textarea></textarea>
            <div id='dice' style='display:inline-block;vertical-align:top'></div>
        </div>
        <div style='width:50%;display:inline-block;max-height:500px;overflow:auto'>
            <div id='MonsterA'></div>
            <div id='MonsterB'></div>
        </div>`
        , onContentBound : function(){
            let view = this;
            view.bindDice();
            view.bindMonsterA();
            view.bindMonsterB();
        }
        , bindDice : function() {
            new Dice({container:document.getElementById('dice')}).attach();
        }
        , bindMonsterA :function(){
            let A = new MonsterBox({
                container : document.getElementById('MonsterA'),
                data : monsters['Kathuil']
            });
            A.attach();
        }
        , bindMonsterB : function(){
            let B = new MonsterBox({
                container : document.getElementById('MonsterB'),
                data : monsters['Pit Fiend']
            });
            B.attach();
        
        }
    });

});