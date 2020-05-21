import { lite } from '../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../scripts/homerolled/tiles.js';

export let view = lite.extend({
    contentUrl : `site/dungeons-dragons/character-sheets/character-sheets.html`,
    onContentBound : function() {
        new Tiles().fill(document.getElementById('character-sheet-tiles'), [
            { title : "Pepper", href:"#dungeons-dragons/character-sheets/pepper", alt: "dwarven cleric"}
            , { title : "Rez", href:"#dungeons-dragons/character-sheets/rez", alt: "Slayer 2"}
            , { title : 'Kene', href : '#dungeons-dragons/character-sheets/kene', alt : 'Slayer 1' }
            , { title : 'Law', href : '#dungeons-dragons/character-sheets/law?path=builds/law', alt : 'big hits'}
            , { title : 'Big Shot', href: '#dungeons-dragons/character-sheets/big-shot?path=builds/big-shot', alt : 'big hit' }
            , { title : 'One Trick', href: '#dungeons-dragons/character-sheets/one-trick', alt : 'eldritch blaster' }
            , { title : 'The Bantam', href : '#dungeons-dragons/character-sheets/the-bantam?path=quiver/the-bantam', alt : 'master of justice' }
            , { title : 'Maximillien', href : '#dungeons-dragons/character-sheets/maximillien?path=quiver/maximillien', alt : 'tank' }
            , { title : 'DOOM', href : '#dungeons-dragons/character-sheets/doom?path=quiver/doom', alt : 'remember all caps' }
        ]);  
    }
});
