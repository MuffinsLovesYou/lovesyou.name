import { lite } from '../../../scripts/homerolled/lite.js';
import { DiceRoller } from '../../common/dice/dice.js';
import { MonsterBox } from '../elements/monsterbox/monsterbox.js';
import { Modal } from '../../common/modal/modal.js';
import { monsters } from '../../../5e/monsters.js';
import { customMonsters } from '../../../5e/custom-monsters/custom-monsters.js';

export let view = lite.extend({
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
        customMonsters.get_monster(monster_name, function(monster_data){
            monsters[monster_name] = monster_data;
        });
    }
    , bindDice : function() {
        new DiceRoller({container:document.getElementById('dice')}).attach();
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
