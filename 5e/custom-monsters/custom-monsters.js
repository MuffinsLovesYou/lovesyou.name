import { LanternWisp } from './lantern-wisp.js';
import { Doran } from './doran-clees.js';
import { JangaleeArc } from './jangalee-arc/jangalee-arc.js';

/* To show up in lookups, monsters need to be pre-loaded into customMonsters */
export let customMonsters = {
    'Lantern Wisp' : LanternWisp,
    'Doran Clees' : Doran,
}
for(let k in JangaleeArc) { customMonsters[k] = JangaleeArc[k]; }

/* Return a monster if we already loaded one, otherwise look for it by path/file-name.js (case sensitive).*/
customMonsters.getMonster = function(monsterName, callback){
    if(customMonsters.containsKey(monsterName)) {
        return callback(customMonsters[monsterName]);
    }

    import('./' + monsterName.toLowerCase() + '.js')
        .then(m => {
            callback(m.monster);
        });
}
