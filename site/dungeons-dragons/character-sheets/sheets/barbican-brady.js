define([
    'lovesyou_template'
    ,'elements/character-sheet'
], function (LYTemplate, char) {

    var template = new LYTemplate();
    template.Content = '<div id="char-container"></div>';
    template.DataUrl = '5e/char-sheets/barbican-brady.js'
    template.DataBind = function () {
        char.Data = template.Data;
    }
    template.OnAttach = function () {
        char.Container = document.getElementById('char-container');
    }

    return template;
});