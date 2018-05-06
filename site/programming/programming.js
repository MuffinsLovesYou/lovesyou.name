define([
    'lite', 
    'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/programming/programming.html',
        onContentBound : function() {
            tiles.fill([
                { title : 'github', href : 'http://www.github.com/muffinslovesyou', alt : 'my poor neglected github account'},
                { title : 'please.js', href : '#code-pages-please', alt : '2017 promises wrapper' },
                { title : 'dice roller', href : '#code-pages-dice-roller', alt : 'April 2018 build' },
                { title : 'd&d character model', href : '#code-pages-character', alt : 'March 2017 character loader on new site' },
            ]);
        }
    });
});