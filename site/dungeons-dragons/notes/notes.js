define([
    'lite'
    ,'scripts/homerolled/tiles'
], function (lite, Tiles) {
    
    return lite.extend({
        content_url : 'site/dungeons-dragons/notes/notes.html',
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles'), [
                {title: '09-2019', href:'#note/sessions/09-2019',alt:'an unforgiving environment'},
                {title: '07-2019', href:'#note/sessions/07-2019',alt:'arriving in the kingdoms'},
                {title: '04-2019', href:'#note/sessions/04-2019',alt:'...'},
                {title: '03-2019', href:'#note/sessions/03-2019',alt:'divine drama'},
                {title: '2018', href:'#dungeons-dragons/notes/archives/2018', alt:'2018 archive'},
                {title: '2017', href:'#dungeons-dragons/notes/archives/2017', alt:'2017 archive'},
                {title: 'timeline', href:'#timeline', alt:'timeline'},
                {title: 'places', href:'#places',alt:''}
            ]);
        }
    });
});