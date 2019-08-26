define([
    'lite'
    ,'tiles'
], function (lite, tiles) {
    
    return lite.extend({
        content : "<p>DM notes.</p><div id='tiles' class='tiles'></div>",
        onContentBound : function() {
            tiles.fill([
                {title:'07-2019', href:'#note/sessions/07-2019',alt:'arriving in the kingdoms'},
                {title:'04-2019', href:'#note/sessions/04-2019',alt:'...'},
                {title:'03-2019', href:'#note/sessions/03-2019',alt:'divine drama'},
                {title:'2018',href:'#2018-notes', alt:'2018 archive'},
                {title:'2017', href:'#2017-notes', alt:'2017 archive'},
                {title:'timeline', href:'#timeline', alt:'timeline'},
                {title:'places',href:'#places',alt:''}
            ]);
        }
    });
});