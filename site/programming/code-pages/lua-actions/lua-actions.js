define([
    'lite'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/lua-actions/lua-actions.html',
        onContentBound : function() {
            let lua = Lite.extend({
                container : document.getElementById('code-page-lua-actions-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/actions.lua',
                onContentLoaded : function(content){
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new lua().attach();
        }
    });
});