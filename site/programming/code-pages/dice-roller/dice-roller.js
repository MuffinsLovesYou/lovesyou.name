import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    contentUrl : 'site/programming/code-pages/dice-roller/dice-roller.html',
    onContentBound : function () {
        let view = this;
        view.bindDiceMain();
        view.bindMathExtensions();

        import('../../../common/dice/dice.js')
            .then(dice => {
                new dice.view().attach(document.getElementById('dice-container'));
            });
    }
    , bindDiceMain : function(){
        let Roller = lite.extend({
            container : document.getElementById('dice-roller-code'),
            contentUrl : 'https://raw.githubusercontent.com/unstableconfiguration/Dice/master/dice.js',
            onContentBound : function(content) {
                import('../../../../scripts/vendor/prism.js')
                    .then((prism) => {
                        Prism.highlightElement(this.container);
                    });
            }
        });
        new Roller().attach();
    }
    , bindMathExtensions : function(){
        let Maths = lite.extend({
            container : document.getElementById('math-extensions-code'),
            contentUrl : `https://raw.githubusercontent.com/unstableconfiguration/Dice/master/modules/math.js`,
            onContentBound : function(content){
                import('../../../../scripts/vendor/prism.js')
                    .then((prism) => {
                        Prism.highlightElement(this.container);
                    });
            }
        });
        new Maths().attach();
    }
});
