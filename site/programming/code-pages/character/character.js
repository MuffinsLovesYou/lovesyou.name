define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'character.html';
    template.OnAttach = function () {

        let view_block = document.getElementById('code-page-character-view-code-block');;
        let view_template = new LYTemplate();
        view_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/site/dungeons-dragons/character-sheets/elements/character-sheet.js';                
        view_template.OnAttach = function(){
            view_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
                require(['prism'], ()=>{ Prism.highlightElement(view_block); });    
        }
        view_template.Container = view_block;

        let character_block = document.getElementById('code-page-character-model-code-block');;
        let character_template = new LYTemplate();
        character_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/5e/character.js';                
        character_template.OnAttach = function(){
            character_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(character_block); });    
        }
        character_template.Container = character_block;

    };

    return template;
});