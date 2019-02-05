define([
    'lite'
    ,'tiles'
], function (lite, tiles) {
    
    return lite.extend({
        content : "<p>DM notes.</p><div id='tiles' class='tiles'></div>",
        onContentBound : function() {
            tiles.fill([
                {title:'improv', href:'#note/sessions/improv',alt:'snowy day session'},
                {title:'12-2018',href:'#note/sessions/12-2018',alt:'bloodkith halls'},
                {title:'10-2018',href:'#note/sessions/10-2018',alt:`nasty business`},
                {title:'08-2018',href:'#note/sessions/08-2018',alt:'maybe time to head out'},
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