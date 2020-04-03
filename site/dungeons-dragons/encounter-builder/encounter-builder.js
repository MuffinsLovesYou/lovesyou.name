define([
    'lite'
    ,'scripts/homerolled/encounterBuilder'
], (lite, EncounterBuilder) => {

    return lite.extend({
        content_url : 'site/dungeons-dragons/encounter-builder/encounter-builder.html',
        onContentBound : function() { 
            console.log('test');

        }
    });

});