define([
    'lite', 
    'scripts/homerolled/tiles'
], function (lite, Tiles) {

    return lite.extend({
        content_url  :  'site/dungeons-dragons/dungeons-dragons.html',
        onContentBound  :  function() {
            let vm = this;
            vm.bindNotes();
            vm.bindUtilities();
        },
        bindNotes : function() { 
            Tiles().fill(document.getElementById('notes-container'), [
                { title : "Character Sheets", href : "#dungeons-dragons/character-sheets", alt : "the quiver of builds" }
              , { title : "Notes", href : "#dungeons-dragons/notes", alt : "dm notes" }
              , { title : "Maps", href : "#dungeons-dragons/maps", alt : "world maps with ms paint doodles" }
          ]);
        },
        bindUtilities : function() {
            Tiles().fill(document.getElementById('utilities-container'), [
                  { title : 'Dice', href : '#dice' }
                , { title : "Lookups", href : "#dungeons-dragons/lookups", alt : "spells, monsters, items" }
                , { title : 'Wild Magic Surge', href : '#dungeons-dragons/wild-magic', alt : 'wild magic surge table' }
                , { title : 'Encounter Builder', href : '#dungeons-dragons/encounter-builder', alt : 'encounter builder' }
            ]);
        }
    });
});