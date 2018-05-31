define([
    'lite', 
    'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/character-sheets/character-sheets.html',
        onContentBound : function() {
            tiles.fill([
                {title:"Pepper",href:"#character/pepper",alt:"dwarven cleric"},
                {title:"Lance of the Heavens",href:"#character/lance",alt:"holy arrows"}
                , { title : 'Shadowhoof', href : '#character/shadowhoof', alt : 'shadow hoof' }
            ]);  
        }
    });
});