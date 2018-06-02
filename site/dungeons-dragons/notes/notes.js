define([
    'lite'
    ,'tiles'
], function (Lite, tiles) {
    
    return Lite.extend({
        content : "<p>DM notes.</p><div id='tiles' class='tiles'></div>",
        onContentBound : function() {
            tiles.fill([
                {title:'06-2018',href:'#note/sessions/06-2018',alt:'october in gingonol'},
                {title:'04-2018',href:'#note/sessions/04-2018', alt:'in gingonol'},
                {title:"02-2018",href:"#note/sessions/02-2018",alt:"on the road again?"},
                {title:'2017', href:'#2017-notes', alt:'2017 archive'},
                {title:'timeline', href:'#timeline', alt:'timeline'},
                {title:'places',href:'#places',alt:''}
            ]);
        }
    });
});