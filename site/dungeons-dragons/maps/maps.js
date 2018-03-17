define([
    'lite', 'tiles'
], function (Lite, tiles) {

    var template = Lite.extend();
    template.content_url = 'site/dungeons-dragons/maps/maps.html';
    template.onContentBound = function () {
        tiles.decorate();
    }

    return template;
});