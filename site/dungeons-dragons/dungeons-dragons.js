define([
    'lite', 
    'tiles'
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
                { title : "Character Sheets", href : "#character-sheets", alt : "the quiver of builds" }
              , { title : "Notes", href : "#notes", alt : "dm notes" }
              , { title : "Maps", href : "#maps", alt : "world maps with ms paint doodles" }
          ]);
        },
        bindUtilities : function() {
            Tiles().fill(document.getElementById('utilities-container'), [
                  { title : 'Dice', href : '#dice' }
                , { title : "Lookups", href : "#lookups", alt : "spells, monsters, items" }
                , { title : 'Wild Magic Surge', href : '#wild-magic', alt : 'wild magic surge table' }
                , { title : 'Encounter Builder', href : '#encounter-builder', alt : 'encounter builder' }
            ]);
        }
    });
});