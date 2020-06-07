import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';

export let view = lite.extend({
    contentUrl : 'site/programming/code-pages/gridify/gridify.html',
    onContentBound : function () {
        let view = this;
        view.usage_code();
        view.grid_demo();
    }
    , grid_demo : function() {
        new Gridify({
            container : 'grid-demo',
            columns : [
                { field : 'basic', header : 'Basic Column' },
                { field : 'sort', header : 'Basic Sort', sort : true },
                { field : 'filter', header : 'Basic Filter', filter : true }
            ],
            data : [
                { basic : 'd', sort : 1, filter : '0001' },
                { basic : 'e', sort : 2, filter : '0010' },
                { basic : 'm', sort : 3, filter : '0011' },
                { basic : 'o', sort : 4, filter : '0100' },
                { basic : 'c', sort : 5, filter : '0101' },
                { basic : 'o', sort : 6, filter : '0110' },
                { basic : 'l', sort : 7, filter : '0111' },
                { basic : 'u', sort : 8, filter : '1000' },
            ],
        });
    }
    , usage_code : function(){
        let view = this;
        window.view = view;
        let Usage = lite.extend({
            container : document.getElementById('gridify-usage-block'),
            content : view.grid_demo.toString(),
            onContentBound : function() {
                import('../../../../scripts/vendor/prism.js')
                    .then((prism) => {
                        Prism.highlightElement(this.container);
                    });
            }
        });
        new Usage().attach();
    }
});

