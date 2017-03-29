define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'lua-textilesv2.html';
    template.OnAttach = function () {

        let caller_block = document.getElementById('code-page-lua-textilesv2-caller-code-block');
        let caller_template = new LYTemplate();
        caller_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/scripts/clothing.lua';
        caller_template.OnAttach = function(){
            caller_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(caller_block); });
        }   
        caller_template.Container = caller_block;

        let module_block = document.getElementById('code-page-lua-textilesv2-module-code-block');

        var module_template = new LYTemplate();
        module_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/textiles.lua';
        module_template.OnAttach = function(){
            module_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(module_block); });
        }
        module_template.Container = module_block;

    };


    return template;
});