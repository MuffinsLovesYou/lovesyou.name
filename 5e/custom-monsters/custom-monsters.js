import { LanternWisp } from './lantern wisp.js';
import { FlaggfurSquire } from './flaggfur-squire.js';
import { Emeline } from './jangalee-arc/Emeline.js';
import { JangaleePashu } from './jangalee-arc/Jangalee Pashu.js';



export let customMonsters = {
    LanternWisp,
    FlaggfurSquire,
    Emeline,
    JangaleePashu
}
customMonsters.getMonster = function(monsterName, callback){
    import('./' + monsterName.toLowerCase() + '.js')
        .then(m => {
            callback(m.monster);
        });
}
