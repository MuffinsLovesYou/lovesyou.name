define([], () => { 


    /* url-hash : file-to-load */
    return {
        "" : 'landing/landing'
        , 'home' : 'landing/landing'
        
        , 'programming/dice-roller' : 'programming/code-pages/dice-roller/dice-roller'
        , 'programming/please' : 'programming/code-pages/please/please'
        , 'programming/lite' : 'programming/code-pages/lite/lite'
        , 'programming/gridify' : 'programming/code-pages/gridify/gridify'
    
        , 'dungeons-dragons': 'dungeons-dragons/dungeons-dragons'
        , 'dungeons-dragons/character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
        , 'dungeons-dragons/character-sheets/{character}' : 'dungeons-dragons/character-sheets/character-sheet'
        , 'dungeons-dragons/dice' : 'common/dice/dice'
        , 'dungeons-dragons/encounter-builder' : 'dungeons-dragons/encounter-builder/encounter-builder'
        , 'dungeons-dragons/lookups' : 'dungeons-dragons/lookups/lookups'
        , 'dungeons-dragons/maps' : 'dungeons-dragons/maps/maps'
        , 'dungeons-dragons/monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
        
        , 'dungeons-dragons/notes' : 'dungeons-dragons/notes/notes'
        , 'dungeons-dragons/notes/places' : 'dungeons-dragons/notes/places'
        , 'dungeons-dragons/notes/2017' : 'dungeons-dragons/notes/2017'
        , 'dungeons-dragons/notes/2018' : 'dungeons-dragons/notes/2018'
        , 'dungeons-dragons/notes/{note}' : 'dungeons-dragons/notes/note'
        , 'dungeons-dragons/notes/archives/{note}' : 'dungeons-dragons/note/note'
        
        , 'dungeons-dragons/spellbox' : 'dungeons-dragons/elements/spellbox/spellbox'
        , 'dungeons-dragons/wild-magic': 'dungeons-dragons/wild-magic/wild-magic'
        
        , 'programming' : 'programming/programming' 
    };

});