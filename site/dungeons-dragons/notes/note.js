define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'scripts/homerolled/markdown-parser'
], function (util, LYTemplate, md) {

    let note = window.location.hash.split('/');
    note = note[note.length-1];


    var template = new LYTemplate();
    template.ContentFormat = (x)=>{
        return md.Parse(x);
    }
    template.ContentUrl = '5e/notes/'+note+'.md'; 
    template.OnAttach = function () {}

    return template;
});