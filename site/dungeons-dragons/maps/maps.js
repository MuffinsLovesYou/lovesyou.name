define([
    'lite', 'tiles'
], function (lite, tiles) {

    return lite.extend({
        content_url : 'site/dungeons-dragons/maps/maps.html',
        onContentBound : function () {
            tiles.decorate();
        }
    });
});