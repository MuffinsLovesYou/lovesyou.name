define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'character.html';
    template.onContentBound = function () {

        let view_block = document.getElementById('code-page-character-view-code-block');;
        let view_template = new LYT();
        view_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/site/dungeons-dragons/character-sheets/elements/character-sheet.js';                
        view_template.onContentBound = function(){
            view_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
                require(['prism'], ()=>{ Prism.highlightElement(view_block); });    
        }
        view_template.container = view_block;
        view_template.attach();

        let character_block = document.getElementById('code-page-character-model-code-block');;
        let character_template = new LYT();
        character_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/lovesyou.name/master/5e/character.js';                
        character_template.onContentBound = function(){
            character_template.content_formatter = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(character_block); });    
        }
        character_template.container = character_block;
        character_template.attach();

    };

    return template;
});