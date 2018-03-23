define([
    'lite'
    ,'tiles'
], function (Lite, tiles) {
    return Lite.extend({
        content : `<p>2017 started and ended with the claw mountain arc.</p><div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:'claw mountain',href:'#recap-claw-mountain',alt:'recap'},
                {title:"12-2017",href:"#note/sessions/2017/12-2017",alt:"in the shadowfel 2"},
                {title:"10-2017",href:"#note/sessions/2017/10-2017",alt:"in the shadowfel"},
                {title:"09-2017",href:"#note/sessions/2017/09-2017",alt:"at claw mountain"},
                {title:"08-2017",href:"#note/sessions/2017/08-2017",alt:"travels part 3"},
                {title:"06-2017",href:"#note/sessions/2017/06-2017",alt:"travels part 2"},
                {title:"04-2017",href:"#note/sessions/2017/04-2017",alt:"long travels"},
                //{title:"worldbuilding-emperors",href:"#notes/emperors",alt:"timeline of emperors"},
                {title:"recap-01/2017",href:"#note/sessions/2017/01-2017",alt:"recap with my new notes."}
            ]);
        }
    });
});