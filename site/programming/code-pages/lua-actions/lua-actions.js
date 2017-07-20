define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'lua-actions.html';
    template.onContentBound = function () {

        let code_block = document.getElementById('code-page-lua-actions-code-block');
        let actions_template = new LYT();
        actions_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/Code-Samples/master/DFHack/Textiles/lovesyou/actions.lua';
        actions_template.onContentBound = function(){
            actions_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(code_block); });
        }   
        actions_template.container = code_block;
        actions_template.attach();
    };


    return template;
});