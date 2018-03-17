define([
    'lite'
    ,'scripts/homerolled/markdown-parser'
], function (Lite, md) {
    
    return Lite.extend({
        initialize : function() {
            this.content_url = '5e/notes/'+window.location.hash.split('/').pop()+'.md';  
        }
        ,onContentLoaded : function(content){
            let mdparsed = md.Parse(content);
            this.content = `
                <div><a href='https://www.dandwiki.com/wiki/5e_SRD:Monsters' target='_blank'>Monsters</a>
                <a href='http://npcgenerator.azurewebsites.net/' target='_blank'>NPC generator</a></div>
                `+mdparsed;
        }
    });
});