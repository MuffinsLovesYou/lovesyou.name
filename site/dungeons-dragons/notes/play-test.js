define([
    'lite'
    ,'site/common/dice/dice'
    ,'site/dungeons-dragons/elements/monsterbox/monsterbox'
    ,'site/common/modal/modal'
    ,'5e/monsters'
    ,'5e/custom_monsters/custom_monsters'
], (lite, Dice, MonsterBox, Modal, monsters, custom_monsters)=>{
    
    return lite.extend({
        content : `
        <div style='width:100%;display:inline-block;vertical-align:top'>
            <textarea></textarea>
            <div id='dice' style='display:inline-block;vertical-align:top'></div>
            <div id='players_container' style='display:inline-block; width:5%; vertical-align:top'>
                <ul id='players' style='display:inline-block'>
                </ul>
            </div>
        </div>`
        , onContentBound : function(){
            let view = this;
            view.bindDice();
            let players = ['duelers/Paladin', 'duelers/Barbarian']
            players.forEach(p => view.load_monster(p));
            players.forEach(p => view.add_player_link(p));
        }
        , load_monster : function(monster_name){
            let monster = monsters[monster_name]
            if(monster) return monster;

            let view = this;
            custom_monsters.get_monster(monster_name, function(monster_data){
                monsters[monster_name] = monster_data;
            });
        }
        , bindDice : function() {
            new Dice({container:document.getElementById('dice')}).attach();
        }
        , add_player_link : function(player_name){
            var ul = document.getElementById('players');
            var player = ul.appendChild(document.createElement('li'));
            player.innerHTML = player_name.replace('duelers/', '');
            player.style['font-size'] = 'large';
            player.style['text-decoration'] = 'underline'
            player.addEventListener('click', function(){
                let monster = monsters[player_name];
                new Modal({
                    container: document.getElementById('modal-container')
                }).attach();
                new MonsterBox({
                    data : monster,
                    container : document.getElementById('modal-content'),
                }).attach();
            });
        }
    });

});