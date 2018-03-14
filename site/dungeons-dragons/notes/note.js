define([
    'lite'
    ,'scripts/homerolled/markdown-parser'
], function (Lite, md) {
    
    var note = window.location.hash.split('/').pop();
    return Lite.extend({
        content_url : '5e/notes/'+note+'.md',
        onContentLoaded : function(content){
            let mdparsed = md.Parse(content);
            this.content = `
                <div><a href='https://www.dandwiki.com/wiki/5e_SRD:Monsters' target='_blank'>Monsters</a>
                <a href='http://npcgenerator.azurewebsites.net/' target='_blank'>NPC generator</a></div>
                `+mdparsed;
        }
    });
});