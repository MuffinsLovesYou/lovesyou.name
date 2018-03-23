define([
    'lite'
    ,'scripts/homerolled/markdown-parser'
    ,'site/dungeons-dragons/notes/timeline/timeline'
], (Lite, md, Timeline)=>{

    return Lite.extend({
        content_url : 'site/dungeons-dragons/notes/recap-claw-mountain/recap-claw-mountain.html' 
        , data_url : '5e/notes/recap-claw-mountain.md'
        ,initialize : function(){
        }
        , onContentBound : function() {
            this.load_timeline();
        }
        , onDataLoaded : function(data) {
            this.data = md.Parse(data);
        }
        , onDataBound : function(data) {
            document.getElementById('recap-text').innerHTML = this.data;
            document.getElementsByTagName('img')[0].style.width ='100%'
        }
        , load_timeline : function() {
            new Timeline({
                container : document.getElementById('timeline_holder')
            }).attach();
        }
    });

});