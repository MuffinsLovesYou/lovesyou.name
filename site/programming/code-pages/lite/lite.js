define([
    'lite'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/lite/lite.html',
        onContentBound : function () {
            let _Lite = Lite.extend({
                container : document.getElementById('lite-code-block'),
                content_url : `https://raw.githubusercontent.com/MuffinsLovesYou/unstableconfiguration/master/scripts/homerolled/lite.js`,               
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new _Lite().attach();
        }
    });
});