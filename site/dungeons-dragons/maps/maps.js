define([
    'lovesyou_util',
    'lite', 'tiles'
], function (util, Lite, tiles) {

    var template = Lite.extend();
    template.content_url = util.context+'maps.html';
    template.onContentBound = function () {
        tiles.decorate();
    }

    return template;
});