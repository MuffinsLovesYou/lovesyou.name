define([
    'lite'
    ,'scripts/homerolled/tiles'
], function (lite, Tiles) {
    return lite.extend({
        content : `
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <p>2017 started and ended with the claw mountain arc.</p>
                </div>
            </div>
            <div class='row'>
                <div id='tiles' class='tiles'></div>
            </div>
        </div>`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles'), [
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