define([
    'lite'
], function (lite) {

    return lite.extend({
        content_url : 'site/programming/code-pages/dice-roller/dice-roller.html',
        onContentBound : function () {
            let view = this;
            view.bindDiceMain();
            view.bindMathExtensions();

            require(['site/common/dice/dice'], (dice) => {
                new dice().attach(document.getElementById('dice-container'));
            });
        }
        , bindDiceMain : function(){
            let Roller = lite.extend({
                container : document.getElementById('dice-roller-code'),
                content_url : 'https://raw.githubusercontent.com/unstableconfiguration/Dice/master/dice.js',
                onContentBound : function(content) {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });    
                }
            });
            new Roller().attach();
        }
        , bindMathExtensions : function(){
            let Maths = lite.extend({
                container : document.getElementById('math-extensions-code'),
                content_url : `https://raw.githubusercontent.com/unstableconfiguration/Dice/master/modules/math.js`,
                onContentBound : function(content){
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); }); 
                }
            });
            new Maths().attach();
        }
    });
});