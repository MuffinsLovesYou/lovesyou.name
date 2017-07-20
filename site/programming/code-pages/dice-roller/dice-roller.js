define([
    'lovesyou_util', 'lovesyou_template', 'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context + 'dice-roller.html';
    template.onContentBound = function () {

        let code_block = document.getElementById('code-page-dice-roller-code-block');
        let roller_template = new LYT();
        roller_template.content_url = 'https://raw.githubusercontent.com/MuffinsLovesYou/LYDice/master/LYDice.js',
            roller_template.onContentBound = function () {
                roller_template.content_formatter = function (data) {
                    data = data.replace('/[<]/g', '&lt;');
                    data = data.replace('/[>]/g', '&gt;');
                    return data;
                }
                require(['prism'], () => {
                    Prism.highlightElement(code_block);
                });
            }
        roller_template.container = code_block;
        roller_template.attach();

    };

    return template;
});