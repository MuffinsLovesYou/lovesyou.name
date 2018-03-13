define([
    'lovesyou_util',
    'lovesyou_template', 
    'tiles'
], function (util, LYT, tiles) {

    let template = new LYT();
    template.content_url = util.context + 'programming.html';
    template.onContentBound = function () {
        tiles.fill([
            { title : 'github', href : 'http://www.github.com/muffinslovesyou', alt : 'my poor neglected github account'},
            { title : 'lovesyou.name', href : '#code-pages/lovesyou.name', alt : `some of this site's scripts`},
            { title : 'dice roller', href : '#code-pages/dice-roller', alt : '9/16 build' },
            { title : 'd&D character model', href : '#code-pages/character', alt : '3/17 character loader on new site' },
            { title : 'lvlr', href: '#code-pages/lvlr', alt : '4/17 solution for entibo.fr/lvlr' },
            { title : 'DF textiles', href : '#code-pages/lua-texttilesv2', alt : 'dwarf fortress lua utility script' },
            { title : 'Lua actions', href : '#code-pages/lua-actions', alt : 'lua utility for timed jobs' }
        ]);
    };

    return template;
});