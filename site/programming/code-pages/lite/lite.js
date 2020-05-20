import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    content_url : 'site/programming/code-pages/lite/lite.html',
    onContentBound : function () {
        let code_block = lite.extend({
            container : document.getElementById('lite-code-block'),
            content_url : `https://raw.githubusercontent.com/unstableconfiguration/Lite/master/lite.js`,               
            onContentBound : function() {
                import('../../../../scripts/vendor/prism.js')
                    .then((prism) => {
                        Prism.highlightElement(this.container);
                    });    
            }
        });
        new code_block().attach();
    }
});
