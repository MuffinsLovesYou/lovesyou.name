define([
    'lite'
    ,'tiles'
], function (Lite, tiles) {
    
    return Lite.extend({
        content : "<p>DM notes.</p><div id='tiles' class='tiles'></div>",
        onContentBound : function() {
            tiles.fill([
                {title:"02-2018",href:"#note/sessions/02-2018",alt:"on the road again?"},
                {title:'2017', href:'#2017-notes', alt:'2017 archive'}
            ]);
        }
    });
});