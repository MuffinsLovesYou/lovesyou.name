define([
    'lite'
    ,'scripts/vendor/mocha'
], (Lite, _mocha, chai)=>{
    mocha.setup('bdd');
            
    return Lite.extend({
        content : `<div id="mocha"></div>`
        , onContentBound : function(){
            let view = this;
            view.load_mocha_css();
            require([
                ,'site/tests/gridify_test'
            ], ()=>{
                mocha.run();
            });
        }
        , load_mocha_css : function() {
            let css = document.createElement('link');
            css.rel = 'stylesheet';
            css.type ='text/css';
            css.href = 'css/vendor/mocha.css';
            let head = document.getElementsByTagName('head')[0];
            let links = document.getElementsByTagName('link');
            let has = Array.from(links).some((link)=>{
                return link.href === css.href;
            });
            if(!has) head.appendChild(css);
        }
    });
});