define([
    'lite', 
    'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/dungeons-dragons.html',
        onContentBound : function() {
            tiles.fill([
                {title:"Character Sheets",href:"#character-sheets",alt:"the quiver of builds"}
                ,{title:"Notes",href:"#notes",alt:"dm notes"}
                ,{title:"Maps",href:"#maps",alt:"world maps with ms paint doodles"}
                ,{title:"Lookups",href:"#lookups",alt:"spells, monsters, items"}
            ])  
        }
    });
});