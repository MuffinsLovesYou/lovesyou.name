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

            console.log('syntax check')
            var hist = new Lite.extend({
                container : document.getElementById('history'),
                data_url : '5e/notes/places/claw mountain.md',
                content : `<div id='history-text'></div>`,
                onDataLoaded : function(data) { this.data = md.Parse(data); },
                onDataBound : function(data) { 
                    document.getElementById('history-text').innerHTML = this.data; 
                    document.getElementsByTagName('img')[0].style.width ='100%'
                }
            });
            new hist().attach();
        }
        , onDataLoaded : function(data) {
            this.data = md.Parse(data);
        }
        , onDataBound : function(data) {
            document.getElementById('recap-text').innerHTML = this.data;
        }
        , load_timeline : function() {
            new Timeline({
                container : document.getElementById('timeline_holder')
            }).attach();
        }
    });

});