define([
    'lite'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/lua-textiles/lua-textiles.html',
        onContentBound : function() {
            let caller = Lite.extend({
                container : document.getElementById('code-page-caller-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/scripts/clothing.lua',
                onContentLoaded : function(content){
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new caller().attach();

            let module = Lite.extend({
                container : document.getElementById('code-page-model-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/textiles.lua',
                onContentLoaded : function(content){
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new module().attach();
        }
    });
});