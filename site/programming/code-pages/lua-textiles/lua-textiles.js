define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYTemplate, tiles) {

    var template = new LYTemplate();
    template.content_url = util.context + 'lua-textiles.html';
    template.onContentBound = function () {

        let view_block = document.getElementById('code-page-caller-view-code-block');
        let template = new LYTemplate();
        view_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/DungeonsDragons/master/5e/scripts/CharacterView.js';
        view_template.onContentBound = function () {
            view_template.content_formatter = function (data) {
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], () => {
                Prism.highlightElement(view_block);
            });
        }
        view_template.container = view_block;
        view_template.attach();

        let module_block = document.getElementById('code-page-lua-textiles-module-code-block');
        let module_template = new LYTemplate();
        module_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/DungeonsDragons/master/5e/scripts/DungeonsDragonsLibrary/lua-textiles.js';
        module_template.onContentBound = function () {
            module_template.content_formatter = function (data) {
                data = data.replace('/[<]/g', '&lt;');
                data = data.replace('/[>]/g', '&gt;');
                return data;
            }
            require(['prism'], () => {
                Prism.highlightElement(module_block);
            });
        }
        module_template.container = module_block;
        module_template.attach();
    };


    return template;
});