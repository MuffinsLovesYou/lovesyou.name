define([
    'lite', 'tiles'
], function (Lite, tiles) {

    return Lite.extend({
        content_url : 'site/programming/code-pages/dice-roller/dice-roller.html',
        onContentBound : function () {
            let view = this;
            view.bindDiceMain();
            view.bindMathExtensions();
        }
        , bindDiceMain : function(){
            let Roller = Lite.extend({
                container : document.getElementById('dice-roller-code'),
                content_url : 'https://raw.githubusercontent.com/MuffinsLovesYou/Dice/master/dice.js',
                onContentBound : function(content) {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });    
                }
            });
            new Roller().attach();
        }
        , bindMathExtensions : function(){
            let Maths = Lite.extend({
                container : document.getElementById('math-extensions-code'),
                content_url : `https://raw.githubusercontent.com/MuffinsLovesYou/Dice/master/modules/math.js`,
                onContentBound : function(content){
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); }); 
                }
            });
            new Maths().attach();
        }
    });
});