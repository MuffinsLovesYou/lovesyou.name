define([
    'lite', 
    'tiles'
], function (lite, tiles) {

    return lite.extend({
        content_url : 'site/dungeons-dragons/dungeons-dragons.html',
        onContentBound : function() {
            tiles.fill([
                {title:"Character Sheets",href:"#character-sheets",alt:"the quiver of builds"}
                ,{title:"Notes",href:"#notes",alt:"dm notes"}
                ,{title:"Maps",href:"#maps",alt:"world maps with ms paint doodles"}
                ,{title:"Lookups",href:"#lookups",alt:"spells, monsters, items"}
                ,{title:'Wild Magic Surge', href:'#wild-magic',alt:'wild magic surge table'}
            ])  
        }
    });
});