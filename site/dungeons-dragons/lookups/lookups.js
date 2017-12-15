define([
    'lovesyou_template'
    ,'scripts/homerolled/lovesyou_tabs'
    ,'site/dungeons-dragons/lookups/tabs/spells'
    ,'5e/monsters'
],(lyt, tabs, spells, monsters)=>{

   
    let LookupView = new lyt()
    LookupView.content_url = 'site/dungeons-dragons/lookups/lookups.html'

    LookupView.onContentBound = function(){
        new tabs().stylize();
        
        spells = spells.new();
        spells.container = document.getElementById('spells_container');
        spells.attach();
    }
    return LookupView;



});