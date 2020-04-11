define([
    'lite', 
    'scripts/homerolled/tiles'
], function (lite, Tiles) {

    return lite.extend({
        content_url : `site/dungeons-dragons/character-sheets/character-sheets.html`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('character-sheet-tiles'), [
                { title : "Pepper", href:"#dungeons-dragons/character-sheets/pepper", alt: "dwarven cleric"}
                , { title : "Rez", href:"#dungeons-dragons/character-sheets/rez", alt: "Slayer 2"}
                , { title : 'Kene', href : '#dungeons-dragons/character-sheets/kene', alt : 'Slayer 1' }
                , { title : 'Law', href : '#dungeons-dragons/character-sheets/builds/law', alt : 'big hits'}
                , { title : 'Big Shot', href: '#dungeons-dragons/character-sheets/builds/big_shot', alt : 'big hit' }
                , { title : 'One Trick', href: '#dungeons-dragons/character-sheets/one_trick', alt : 'eldritch blaster' }
                , { title : 'The Bantam', href : '#dungeons-dragons/character-sheets/quiver/the_bantam', alt : 'master of justice' }
                , { title : 'Maximillien', href : '#dungeons-dragons/character-sheets/quiver/maximillien', alt : 'me, but tanky' }
                , { title : 'Tortle Cleric', href : '#dungeons-dragons/character-sheets/builds/tortle_cleric', alt : 'char sheet for someone else' }
                , { title : 'DOOM', href : '#dungeons-dragons/character-sheets/quiver/doom', alt : 'remember all caps' }
            ]);  
        }
    });
});