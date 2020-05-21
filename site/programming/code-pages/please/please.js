import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    contentUrl : 'site/programming/code-pages/please/please.html',
    onContentBound : function () {
        let Please = lite.extend({
            container : document.getElementById('please-code-block'),
            contentUrl : `https://raw.githubusercontent.com/unstableconfiguration/Lite/master/please.js`,               
            onContentBound : function() {
                import('../../../../scripts/vendor/prism.js')
                    .then((prism) => {
                        Prism.highlightElement(this.container);
                    });
            }
        });
        new Please().attach();
    }
});
