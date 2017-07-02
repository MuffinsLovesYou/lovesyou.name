define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.content_url = util.context+'lua-textilesv2.html';
    template.onContentBound = function () {

        let caller_block = document.getElementById('code-page-lua-textilesv2-caller-code-block');
        let caller_template = new LYTemplate();
        caller_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/scripts/clothing.lua';
        caller_template.onContentBound = function(){
            caller_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(caller_block); });
        }   
        caller_template.container = caller_block;
        caller_template.attach();

        let module_block = document.getElementById('code-page-lua-textilesv2-module-code-block');

        var module_template = new LYTemplate();
        module_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/textiles.lua';
        module_template.onContentBound = function(){
            module_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(module_block); });
        }
        module_template.container = module_block;
        module_template.attach();
    };


    return template;
});