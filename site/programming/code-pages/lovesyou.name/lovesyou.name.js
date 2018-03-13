define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'lovesyou.name.html';
    template.onContentBound = function () {

        let router_block = document.getElementById('code-page-router-code-block');
        let router_template = new LYT();
        router_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/scripts/homerolled/router.js';
        router_template.onContentBound = function(){
            router_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(router_block); });
        }   
        router_template.container = router_block;
        router_template.attach();
    
        let template_block = document.getElementById('code-page-template-code-block');
        let template_template = new LYT();
        template_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/scripts/homerolled/lovesyou_template.js';
        template_template.onContentBound = function(){
            template_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(template_block); });
        }   
        template_template.container = template_block;
        template_template.attach();

    };


    return template;
});