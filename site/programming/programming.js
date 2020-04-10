define([
    'lite', 
    'scripts/homerolled/tiles'
], function (lite, Tiles) {

    return lite.extend({
        content_url : 'site/programming/programming.html',
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles-container'), [
                { title : 'github', href : 'http://www.github.com/unstableconfiguration', alt : 'my poor neglected github account'},
                { title : 'please.js', href : '#code-pages-please', alt : '2017 promises wrapper' },
                { title : 'lite.js', href : '#code-pages-lite', alt : 'March 2018 templating script' },
                { title : 'gridify.js', href : '#code-pages-gridify', alt : 'html table generator' },
                { title : 'dice roller', href : '#code-pages-dice-roller', alt : 'April 2018 build' },
            ]);
        }
    });
});