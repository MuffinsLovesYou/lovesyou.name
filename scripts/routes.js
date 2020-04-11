define([], () => { 

    let code_path = 'programming/code-pages/';

    /* Path mapping for # navigation */
    return {
        "" : 'landing/landing'
        , 'dungeons-dragons/notes/archives/2017' : 'dungeons-dragons/notes/2017'
        , 'dungeons-dragons/notes/archives/2018' : 'dungeons-dragons/notes/2018'
        , 'dungeons-dragons/character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
        , 'dungeons-dragons/character-sheets/{character}' : 'dungeons-dragons/character-sheets/character-sheet'
        , 'dice' : 'common/dice/dice'
        , 'dungeons-dragons': 'dungeons-dragons/dungeons-dragons'
        , 'dungeons-dragons/encounter-builder' : 'dungeons-dragons/encounter-builder/encounter-builder'
        , 'dungeons-dragons/lookups' : 'dungeons-dragons/lookups/lookups'
        , 'dungeons-dragons/maps' : 'dungeons-dragons/maps/maps'
        , 'dungeons-dragons/monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
        , 'dungeons-dragons/notes' : 'dungeons-dragons/notes/notes'
        , 'dungeons-dragons/notes/recap-claw-mountain' : 'dungeons-dragons/notes/recap-claw-mountain/recap-claw-mountain' 
        , 'dungeons-dragons/spellbox' : 'dungeons-dragons/elements/spellbox/spellbox'
        , 'dungeons-dragons/notes/timeline' : 'dungeons-dragons/notes/timeline/timeline'
        , 'dungeons-dragons/wild-magic': 'dungeons-dragons/wild-magic/wild-magic'
        , 'home' : 'landing/landing'
        , 'note' : 'dungeons-dragons/notes/note'
        , 'places' : 'dungeons-dragons/notes/places/places'
        , 'playtest' : 'dungeons-dragons/notes/play-test'
        , 'programming' : 'programming/programming'
        
        , 'code-pages' : 'programming/code-pages/'  
        , 'code-pages-character' : code_path + 'character/character'
        , 'code-pages-dice-roller' : code_path + 'dice-roller/dice-roller'
        , 'code-pages-please' : code_path + 'please/please'
        , 'code-pages-lite' : code_path + 'lite/lite'
        , 'code-pages-gridify' : code_path + 'gridify/gridify'
    };

});