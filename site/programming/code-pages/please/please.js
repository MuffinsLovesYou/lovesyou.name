define([
    'lite'
], function (lite) {

    return lite.extend({
        content_url : 'site/programming/code-pages/please/please.html',
        onContentBound : function () {
            let Please = lite.extend({
                container : document.getElementById('please-code-block'),
                content_url : `https://raw.githubusercontent.com/MuffinsLovesYou/unstableconfiguration/master/scripts/homerolled/please.js`,               
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new Please().attach();
        }
    });
});