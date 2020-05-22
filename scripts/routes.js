
/* url-hash : file-to-load */
export let routes = {
    "" : 'landing/landing.js'
    , 'home' : 'landing/landing.js'
    
    , 'programming/dice-roller' : 'programming/code-pages/dice-roller/dice-roller.js'
    , 'programming/please' : 'programming/code-pages/please/please.js'
    , 'programming/lite' : 'programming/code-pages/lite/lite.js'
    , 'programming/gridify' : 'programming/code-pages/gridify/gridify.js'

    , 'dungeons-dragons': 'dungeons-dragons/dungeons-dragons.js'
    , 'dungeons-dragons/character-sheets' : 'dungeons-dragons/character-sheets/character-sheets.js'
    , 'dungeons-dragons/character-sheets/{character}' : 'dungeons-dragons/character-sheets/character-sheet.js'
    , 'dungeons-dragons/dice' : 'common/dice/dice.js'
    , 'dungeons-dragons/encounter-builder' : 'dungeons-dragons/encounter-builder/encounter-builder.js'
    , 'dungeons-dragons/lookups' : 'dungeons-dragons/lookups/lookups.js'
    , 'dungeons-dragons/maps' : 'dungeons-dragons/maps/maps.js'
    , 'dungeons-dragons/monsterbox/{monster}' : 'dungeons-dragons/elements/monsterbox/monsterbox.js'
    
    , 'dungeons-dragons/notes' : 'dungeons-dragons/notes/notes.js'
    , 'dungeons-dragons/notes/places' : 'dungeons-dragons/notes/places.js'
    , 'dungeons-dragons/notes/archives/2017' : 'dungeons-dragons/notes/archives/2017.js'
    , 'dungeons-dragons/notes/archives/2018' : 'dungeons-dragons/notes/archives/2018.js'
    , 'dungeons-dragons/notes/archives/2019' : 'dungeons-dragons/notes/archives/2019.js'
    , 'dungeons-dragons/notes/{note}' : 'dungeons-dragons/notes/note.js'
    , 'dungeons-dragons/notes/archives/{note}' : 'dungeons-dragons/note/note.js'
    
    , 'dungeons-dragons/spellbox' : 'dungeons-dragons/elements/spellbox/spellbox.js'
    , 'dungeons-dragons/wild-magic': 'dungeons-dragons/wild-magic/wild-magic.js'
    
    , 'programming' : 'programming/programming.js' 
};
