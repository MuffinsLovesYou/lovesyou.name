import { lite } from '../../scripts/homerolled/lite.js';
import { Tiles } from '../../scripts/homerolled/tiles.js';

export let view = lite.extend({
    content_url : 'site/programming/programming.html',
    onContentBound : function() {
        new Tiles().fill(document.getElementById('tiles-container'), [
            { title : 'github', href : 'http://www.github.com/unstableconfiguration', alt : 'my poor neglected github account'},
            { title : 'please.js', href : '#programming/please', alt : '2017 promises wrapper' },
            { title : 'lite.js', href : '#programming/lite', alt : 'March 2018 templating script' },
            { title : 'gridify.js', href : '#programming/gridify', alt : 'html table generator' },
            { title : 'dice roller', href : '#programming/dice-roller', alt : 'April 2018 build' },
        ]);
    }
});
