define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'scripts/homerolled/markdown-parser'
], function (util, LYT, md) {
    
    var template = new LYT();
    template.initialize = function(){
        var _this = this;
        let note = window.location.hash.split('/').pop();
        _this.content_url = '5e/notes/'+note+'.md'; 
    }
    template.content_formatter = function(){
        let mdparsed = md.Parse(this.content);
        this.content = `
        <div><a href='https://www.dandwiki.com/wiki/5e_SRD:Monsters' target='_blank'>Monsters</a>
        <a href='http://npcgenerator.azurewebsites.net/' target='_blank'>NPC generator</a></div>
        `+mdparsed;
    }

    return template;
});