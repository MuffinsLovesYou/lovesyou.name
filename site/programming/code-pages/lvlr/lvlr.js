define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {
 


    var template = new LYTemplate();
    template.content_url = util.context + 'lvlr.html';
    template.onContentBound = function () {
        let code_block = document.getElementById('code-page-lvlr-code-block');

        var code_template = new LYTemplate();
        code_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/lvlr/master/lvlr_solver.js';
                
        code_template.onContentBound = function(){
            code_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(code_block); });
        }
        code_template.container = code_block;
        code_template.attach();
    }

    return template;
});