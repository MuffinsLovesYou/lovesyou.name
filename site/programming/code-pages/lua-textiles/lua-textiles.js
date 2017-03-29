define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.ContentUrl = util.context+'lua-textiles.html';
    template.OnAttach = function () {

        let view_block = document.getElementById('code-page-caller-view-code-block');
        let template = new LYTemplate();
        view_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/DungeonsDragons/master/5e/scripts/CharacterView.js';
        view_template.OnAttach = function(){
            view_template.ContentFormat = function(data){
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], ()=>{ Prism.highlightElement(view_block); });
        }   
        view_template.Container = view_block;
   
        let module_block = document.getElementById('code-page-lua-textiles-module-code-block');
        let module_template = new LYTemplate();
        module_template.ContentUrl = 'https://raw.githubusercontent.com/MuffinsLovesYou/DungeonsDragons/master/5e/scripts/DungeonsDragonsLibrary/lua-textiles.js';
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