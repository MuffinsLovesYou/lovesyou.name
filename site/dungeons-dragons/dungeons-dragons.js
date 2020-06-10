import { lite } from '../../scripts/homerolled/lite.js';
import { Tiles } from '../../scripts/homerolled/tiles.js';

export let view = lite.extend({
    contentUrl  :  'site/dungeons-dragons/dungeons-dragons.html',
    onContentBound  :  function() {
        let vm = this;
        vm.bindNotes();
        vm.bindUtilities();
    },
    bindNotes : function() { 
        new Tiles().fill(document.getElementById('notes-container'), [
            { title : "Character Sheets", href : "#dungeons-dragons/character-sheets", alt : "the quiver of builds" }
            , { title : "Notes", href : "#dungeons-dragons/notes", alt : "dm notes" }
            , { title : "Maps", href : "#dungeons-dragons/maps", alt : "world maps with ms paint doodles" }
        ]);
    },
    bindUtilities : function() {
        new Tiles().fill(document.getElementById('utilities-container'), [
                { title : 'Dice', href : '#dungeons-dragons/dice' }
            , { title : "Lookups", href : "#dungeons-dragons/lookups", alt : "spells, monsters, items" }
            , { title : 'Wild Magic Surge', href : '#dungeons-dragons/wild-magic', alt : 'wild magic surge table' }
            , { title : 'Encounter Builder', href : '#dungeons-dragons/encounter-builder', alt : 'encounter builder' }
            , { title : 'Battle Manager', href : '#dungeons-dragons/battle-manager', alt : 'battle management' }
        ]);
    }
});
