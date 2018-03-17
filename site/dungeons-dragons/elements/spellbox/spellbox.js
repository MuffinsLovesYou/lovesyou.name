define([
    'lite'
    ,'5e/spells'
], function (Lite, spells) {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/elements/spellbox/spellbox.html',
        onDataBound : function(data){
            document.getElementById('spell-sub').innerHTML = 'level ' + data.Level + ' ' + data.School;
        }
    });
});