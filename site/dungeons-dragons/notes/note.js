define([
    'lite'
    ,'scripts/homerolled/markdown-parser'
], function (lite, md) {
    
    return lite.extend({
        initialize : function() {
            this.content_url = this.getDataUrl();  
        }
        , getDataUrl : function() { 
            let hash = location.hash;
            if(hash.indexOf('path') > -1){
                return '5e/notes/' + hash.substr(hash.indexOf('path') + 5) + '.md';
            }
            else {
                return '5e/notes/' + hash.split('/').slice(2).join('/') + '.md';
            }
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