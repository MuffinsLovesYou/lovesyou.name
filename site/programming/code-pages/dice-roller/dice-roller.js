define([
    'lite', 'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/dice-roller/dice-roller.html',
        onContentBound : function () {
            let roller = Lite.extend({
                container : document.getElementById('code-page-dice-roller-code-block'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/LYDice/master/LYDice.js',
                onContentBound : function(content) {
                    this.content = content
                        .replace('/[<]/g', '&lt;')
                        .replace('/[>]/g', '&gt;');
                },
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });    
                }
            });
            new roller().attach();
        }
    });
});