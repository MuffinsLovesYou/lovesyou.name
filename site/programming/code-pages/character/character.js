define([
    'lite'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/character/character.html',
        onContentBound : function () {
            let view = Lite.extend({
                container : document.getElementById('code-page-character-view-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/unstableconfiguration/master/site/dungeons-dragons/character-sheets/character-sheet.js',               
                onContentLoaded : function(content){
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new view().attach();

            let char = Lite.extend({
                container : document.getElementById('code-page-character-model-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/unstableconfiguration/master/5e/character.js',
                onContentLoaded : function(content){
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });    
                }               
            });
            new char().attach();
        }
    });
});