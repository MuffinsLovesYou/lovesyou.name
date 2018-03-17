define([
    'lite', 'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/maps/maps.html',
        onContentBound : function () {
            tiles.decorate();
        }
    });
});