define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'dice-roller.html';
    template.OnAttach = function () {

        let code_block = document.getElementById('code-page-dice-roller-code-block');
        let roller_template = new LYTemplate();
        roller_template.ContentUrl =  'https://raw.githubusercontent.com/MuffinsLovesYou/LYDice/master/LYDice.js',
        roller_template.OnAttach = function(){
            roller_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(code_block); });
        }   
        roller_template.Container = code_block;
        
    };

    return template;
});