define([
    'lovesyou_util',
    'lovesyou_template', 
    'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'landing.html';
    template.onContentBound = function () {
        tiles.fill([
            { title : 'programming', alt : 'samples and experiments', href : '#Programming' }
            , { title : 'dungeons and dragons', alt : 'characters, notes', href : '#DungeonsDragons' }
        ]);
    }
    return template;
});