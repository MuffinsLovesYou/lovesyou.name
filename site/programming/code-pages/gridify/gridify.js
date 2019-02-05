define([
    'lite'
    ,'scripts/homerolled/gridify'
], function (lite, gridify) {

    return lite.extend({
        content_url : 'site/programming/code-pages/gridify/gridify.html',
        onContentBound : function () {
            let view = this;
            view.gridify_code();
            view.usage_code();
            view.grid_demo();
        }
        , gridify_code : function(){
            let Gridify = lite.extend({
                container : document.getElementById('gridify-code-block'),
                content_url : `https://raw.githubusercontent.com/MuffinsLovesYou/unstableconfiguration/master/scripts/homerolled/gridify.js`,               
                onContentBound : function() {
                    require(['prism'], ()=>{ Prism.highlightElement(this.container); });
                }
            });
            new Gridify().attach();
        }
        , usage_code : function(){
            let view = this;
            window.view = view;
            let Usage = lite.extend({
                container : document.getElementById('gridify-usage-block'),
                content : view.grid_demo.toString(),
                onContentBound : function() {
                    require(['prism', ()=>{ Prism.highlightElement(this.container); }]);
                }
            });
            new Usage().attach();
        }
        , grid_demo : function(){
            gridify('grid-demo').initialize({
                data : [
                    { a : 1, b : 2, c : 3 },
                    { a : 10, b : 20, c : 30 }
                ],
                columns : [
                    { field : 'a', sort : true, filter : true },
                    { field : 'b', header :'B', sort : true },
                    { field : 'c' }
                ]
            });
        }
    });
});