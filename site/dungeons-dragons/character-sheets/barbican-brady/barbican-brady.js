define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'elements/character-sheet'
], function (util, LYTemplate, char) {

    //ok, loading and unloading 
    // we load the templates, 
    // that involves loading or being given content 
    // loading or being given data 
    // then they can redraw based on these whenever. 
    // this is fine as long as we aren't touching any other part of the page. 

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