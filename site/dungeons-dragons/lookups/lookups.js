define([
    'lite'
    ,'scripts/homerolled/lovesyou_tabs'
    ,'site/dungeons-dragons/lookups/tabs/spells'
    ,'site/dungeons-dragons/lookups/tabs/monsters'
],(Lite, tabs, Spells, Monsters)=>{

    return Lite.extend({
        content_url : 'site/dungeons-dragons/lookups/lookups.html',
        onContentBound : function() {
            new tabs().stylize();
            new Spells({
                container : document.getElementById('spells-content')
            }).attach();

            new Monsters({
                container : document.getElementById('monsters-content')
            }).attach();
        }
    });
});