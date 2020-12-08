
/* 
    Default behavior (defined in main.js): #hash/url/path looks for a file site/hash/url/path/path.js
        So #dungeons-dragons/wild-magic opens site/dungeons-dragons/wild-magic/wild-magic.js
*/
export let routes = [
    { hash : '', value : 'landing/landing.js' },
    { hash : 'dungeons-dragons/character-sheets/{character}', 
        value : 'dungeons-dragons/character-sheets/character-sheet.js' },
    { hash : 'dungeons-dragons/dice', value : 'common/dice/dice.js' },
    
    // We could eliminate these by dropping their pages in subfolders
    { hash : 'dungeons-dragons/notes/places', value : 'dungeons-dragons/notes/places.js' },
    { hash : 'dungeons-dragons/notes/archives/2017', value : 'dungeons-dragons/notes/archives/2017.js' },
    { hash : 'dungeons-dragons/notes/archives/2018', value : 'dungeons-dragons/notes/archives/2018.js' },
    { hash : 'dungeons-dragons/notes/archives/2019', value : 'dungeons-dragons/notes/archives/2019.js' },
    /* wildcards need to come after hard coded ones or else they will trigger  */
    { hash : 'dungeons-dragons/notes/{note}', value : 'dungeons-dragons/notes/note.js' },
    { hash : 'dungeons-dragons/notes/archives/{note}', value : 'dungeons-dragons/note/note.js' },
    
    { hash : 'monsterbox/{monster}', value : 'dungeons-dragons/elements/monsterbox/monsterbox.js' },
    { hash : 'spellbox/{spell}', value : 'dungeons-dragons/elements/spellbox/spellbox.js' }

]

