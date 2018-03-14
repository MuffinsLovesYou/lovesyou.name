define([
    'lite', 
    'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/programming/programming.html',
        onContentBound : function() {
            tiles.fill([
                { title : 'github', href : 'http://www.github.com/muffinslovesyou', alt : 'my poor neglected github account'},
                //{ title : 'lovesyou.name', href : '#code-pages-lovesyou.name', alt : `some of this site's scripts`},
                { title : 'dice roller', href : '#code-pages-dice-roller', alt : '9/16 build' },
                { title : 'd&d character model', href : '#code-pages-character', alt : '3/17 character loader on new site' },
                { title : 'DF textiles', href : '#code-pages-lua-textiles', alt : 'dwarf fortress lua utility script' },
                { title : 'Lua actions', href : '#code-pages-lua-actions', alt : 'lua utility for timed jobs' }
            ]);
        }
    });
});