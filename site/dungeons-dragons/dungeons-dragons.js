define([
    'lovesyou_util',
    'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'dungeons-dragons.html';
    template.onContentBound = function () {
        tiles.fill([
            {title:"Character Sheets",href:"#character-sheets",alt:"the quiver of builds"}
            ,{title:"Notes",href:"#notes",alt:"dm notes"}
            ,{title:"Maps",href:"#maps",alt:"world maps with ms paint doodles"}
            ,{title:"Lookups",href:"#lookups",alt:"spells, monsters, items"}
        ])
    }




    return template;
});