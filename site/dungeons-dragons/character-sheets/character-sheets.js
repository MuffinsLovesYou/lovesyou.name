define([
    'lite', 
    'tiles'
], function (lite, tiles) {

    return lite.extend({
        content : `<div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:"Pepper",href:"#character/pepper",alt:"dwarven cleric"}
                , {title:"Rez",href:"#character/rez",alt:"Slayer 2"}
                , { title : 'Kene', href : '#character/kene', alt : 'Slayer 1' }
                , { title : 'Law', href : '#character/builds/law', alt : 'big hits'}
                , { title : 'Big Shot', href: '#character/builds/big_shot', alt : 'big hit' }
                , { title : 'One Trick', href: '#character/one_trick', alt : 'eldritch blaster' }
                , { title : 'The Bantam', href : '#character/quiver/the_bantam', alt : 'master of justice' }
                , { title : 'Maximillien', href : '#character/quiver/maximillien', alt : 'me, but tanky' }
            ]);  
        }
    });
});