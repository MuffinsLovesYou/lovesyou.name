import { LanternWisp } from './Lantern Wisp.js';
import { Doran } from './Doran Clees.js';
import { JangaleeArc } from './jangalee-arc/jangalee-arc.js';

export let customMonsters = {
    'Lantern Wisp' : LanternWisp,
    'Doran Clees' : Doran,
}
for(let k in JangaleeArc) { customMonsters[k] = JangaleeArc[k]; }

customMonsters.getMonster = function(monsterName, callback){
    import('./' + monsterName.toLowerCase() + '.js')
        .then(m => {
            callback(m.monster);
        });
}
