define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'lovesyou.name.html';
    template.OnAttach = function () {

        let router_block = document.getElementById('code-page-router-code-block');
        let router_template = new LYTemplate();
        router_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/scripts/homerolled/lovesyou_router.js';
        router_template.OnAttach = function(){
            router_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(router_block); });
        }   
        router_template.Container = router_block;
    
    
        let template_block = document.getElementById('code-page-template-code-block');
        let template_template = new LYTemplate();
        template_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/scripts/homerolled/lovesyou_template.js';
        template_template.OnAttach = function(){
            template_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(template_block); });
        }   
        template_template.Container = template_block;
    

    };


    return template;
});