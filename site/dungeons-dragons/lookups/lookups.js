define([
    'lite'
    ,'scripts/homerolled/lovesyou_tabs'
    ,'site/dungeons-dragons/lookups/tabs/spells'
    ,'5e/monsters'
],(Lite, tabs, spells, monsters)=>{

    return Lite.extend({
        content_url : 'site/dungeons-dragons/lookups/lookups.html',
        onContentBound : function() {
            new tabs().stylize();
            spells.container = document.getElementById('spells_container');
            spells.attach();
        }
    });
});