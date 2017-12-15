define([
    'lovesyou_util',
    'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    let template = new LYT();
    template.content_url = util.context + 'programming.html';
    template.onContentBound = function () {
        tiles.decorate();
    };

    return template;
});