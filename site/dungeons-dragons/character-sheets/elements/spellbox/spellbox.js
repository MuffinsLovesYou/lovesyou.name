define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'5e/spells'
], function (util, LYTemplate, spells) {


    var template = new LYTemplate();
    template.ContentUrl = 'site/dungeons-dragons/character-sheets/elements/spellbox/spellbox.html';
    
    template.DataBind = function () {
        let data = template.Data;
        document.getElementById('spell-name').innerHTML = data.Name;
        document.getElementById('spell-sub').innerHTML = 'level ' + data.Level + ' ' + data.School;
        document.getElementById('spell-casting-time').innerHTML = data['Casting Time'];
        document.getElementById('spell-range').innerHTML = data.Range;
        document.getElementById('spell-components').innerHTML = data.Components;
        document.getElementById('spell-duration').innerHTML = data.Duration;
        
        document.getElementById('spell-description').innerHTML = data.Description;
    }
    template.OnAttach = function () { }

    return template;
});