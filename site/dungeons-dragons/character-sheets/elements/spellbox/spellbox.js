define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'5e/spells'
], function (util, LYTemplate, spells) {

    var template = new LYTemplate();
    template.initialize = function() {
        this.content_url = 'site/dungeons-dragons/character-sheets/elements/spellbox/spellbox.html';
    }
    template.onDataBound = function () {
        let data = this.data;
        document.getElementById('spell-name').innerHTML = data.Name;
        document.getElementById('spell-sub').innerHTML = 'level ' + data.Level + ' ' + data.School;
        document.getElementById('spell-casting-time').innerHTML = data['Casting Time'];
        document.getElementById('spell-range').innerHTML = data.Range;
        document.getElementById('spell-components').innerHTML = data.Components;
        document.getElementById('spell-duration').innerHTML = data.Duration;
        
        document.getElementById('spell-description').innerHTML = data.Description;
    }
    template.onContentBound = function () { }

    return template;
});