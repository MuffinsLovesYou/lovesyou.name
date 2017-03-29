define([
    'lovesyou_util',
    'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'landing.html';
    template.OnAttach = function () {
        tiles.decorate();
    }

    return template;
});