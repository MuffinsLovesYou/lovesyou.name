define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'elements/character-sheet'
], function (util, LYTemplate, char) {




    var template = new LYTemplate();
    template.Content = '<div id="char-container"></div>';
    template.DataUrl = '5e/char-sheets/law.js'
    template.DataBind = function () {
        char.Data = template.Data;
    }
    template.OnAttach = function () {
        char.Container = document.getElementById('char-container');
    }

    return template;
});