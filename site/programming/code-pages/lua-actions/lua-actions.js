define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'lua-actions.html';
    template.OnAttach = function () {

        let code_block = document.getElementById('code-page-lua-actions-code-block');
        let actions_template = new LYTemplate();
        actions_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/actions.lua';
        actions_template.OnAttach = function(){
            actions_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(code_block); });
        }   
        actions_template.Container = code_block;
    
    };


    return template;
});