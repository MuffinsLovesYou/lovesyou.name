define([
    'lovesyou_util',
    'lovesyou_template'
    ,'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'notes.html';
    template.onContentBound = function () {
        tiles.decorate();
    }

    return template;
});