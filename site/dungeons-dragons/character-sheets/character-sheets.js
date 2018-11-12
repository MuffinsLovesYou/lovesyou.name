define([
    'lite', 
    'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content : `<div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:"Pepper",href:"#character/pepper",alt:"dwarven cleric"},
                {title:"Rez",href:"#character/rez",alt:"Slayer 2"}
                , { title : 'Kene', href : '#character/kene', alt : 'Slayer 1' }
            ]);  
        }
    });
});