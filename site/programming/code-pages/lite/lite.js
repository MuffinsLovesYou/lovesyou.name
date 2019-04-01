define([
    'lite'
], function (lite) {

    return lite.extend({
        content_url : 'site/programming/code-pages/lite/lite.html',
        onContentBound : function () {
            let code_block = lite.extend({
                container : document.getElementById('lite-code-block'),
                content_url : `https://raw.githubusercontent.com/MuffinsLovesYou/Lite/master/lite.js`,               
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new code_block().attach();
        }
    });
});