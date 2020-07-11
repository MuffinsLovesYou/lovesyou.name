import { LanternWisp } from './lantern wisp.js';
import { Squire } from './flaggfur-squire.js';
import { JangaleeArc } from './jangalee-arc/jangalee-arc.js';

export let customMonsters = {
    'Lantern Wisp' : LanternWisp,
    Squire,
}
for(let k in JangaleeArc) { customMonsters[k] = JangaleeArc[k]; }

customMonsters.getMonster = function(monsterName, callback){
    import('./' + monsterName.toLowerCase() + '.js')
        .then(m => {
            callback(m.monster);
        });
}
