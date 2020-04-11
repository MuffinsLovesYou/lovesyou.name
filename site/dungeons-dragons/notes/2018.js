define([
    'lite'
    ,'scripts/homerolled/tiles'
], function (lite, Tiles) {
    return lite.extend({
        content : `
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <p>2018 started with the group heading to Ging Onol and ended as they were about to retake the Bloodkith Halls.</p>
                </div>
            </div>
            <div class='row'>
                <div id='tiles' class='tiles'></div>
            </div>
        </div>`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles'), [
                {title:"12-2018",href:"#dungeons-dragons/notes/sessions/2018/12-2018",alt:"heading to bloodkith"},
                {title:"10-2018",href:"#dungeons-dragons/notes/sessions/2018/10-2018",alt:"fighting the filth"},
                {title:"08-2018",href:"#dungeons-dragons/notes/sessions/2018/08-2018",alt:"meeting eberk"},
                {title:"06-2018",href:"#dungeons-dragons/notes/sessions/2018/06-2018",alt:"breaking rayne's pact"},
                {title:"04-2018",href:"#dungeons-dragons/notes/sessions/2018/04-2018",alt:"putting on a play"},
                {title:"02-2018",href:"#dungeons-dragons/notes/sessions/2018/02-2018",alt:"departing to ging onol"},
                {title:'improv',href:'#dungeons-dragons/notes/sessions/2018/improv',alt:'one off in thousand needles'},
            ]);
        }
    });
});