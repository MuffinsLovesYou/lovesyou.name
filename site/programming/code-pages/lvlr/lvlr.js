define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {
 


    var template = new LYTemplate();
    template.ContentUrl = util.context + 'lvlr.html';
    template.OnAttach = function () {
        let code_block = document.getElementById('code-page-lvlr-code-block');

        var code_template = new LYTemplate();
        code_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/lvlr/master/lvlr_solver.js';
                
        code_template.OnAttach = function(){
            code_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(code_block); });
        }
        code_template.Container = code_block;

    }

    return template;
});