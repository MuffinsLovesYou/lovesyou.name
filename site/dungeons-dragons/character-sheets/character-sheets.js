define([
    'lite', 
    'scripts/homerolled/tiles'
], function (lite, Tiles) {

    return lite.extend({
        content_url : `site/dungeons-dragons/character-sheets/character-sheets.html`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('character-sheet-tiles'), [
                {title:"Pepper",href:"#character/pepper",alt:"dwarven cleric"}
                , {title:"Rez",href:"#character/rez",alt:"Slayer 2"}
                , { title : 'Kene', href : '#character/kene', alt : 'Slayer 1' }
                , { title : 'Law', href : '#character/builds/law', alt : 'big hits'}
                , { title : 'Big Shot', href: '#character/builds/big_shot', alt : 'big hit' }
                , { title : 'One Trick', href: '#character/one_trick', alt : 'eldritch blaster' }
                , { title : 'The Bantam', href : '#character/quiver/the_bantam', alt : 'master of justice' }
                , { title : 'Maximillien', href : '#character/quiver/maximillien', alt : 'me, but tanky' }
                , { title : 'Tortle Cleric', href : '#character/builds/tortle_cleric', alt : 'char sheet for someone else' }
                , { title : 'DOOM', href : '#character/quiver/doom', alt : 'remember all caps' }
            ]);  
        }
    });
});