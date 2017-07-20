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
        this.content = md.Parse(this.content);
    }

    return template;
});