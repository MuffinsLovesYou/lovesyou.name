define([
    'lite'
    ,'tiles'
], function (lite, tiles) {
    return lite.extend({
        content : `<p>2017 started and ended with the claw mountain arc.</p><div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:"12-2018",href:"#note/sessions/2018/12-2018",alt:"heading to bloodkith"},
                {title:"10-2018",href:"#note/sessions/2018/10-2018",alt:"fighting the filth"},
                {title:"08-2018",href:"#note/sessions/2018/08-2018",alt:"meeting eberk"},
                {title:"06-2018",href:"#note/sessions/2018/06-2018",alt:"breaking rayne's pact"},
                {title:"04-2018",href:"#note/sessions/2018/04-2018",alt:"putting on a play"},
                {title:"02-2018",href:"#note/sessions/2018/02-2018",alt:"departing to ging onol"},
                {title:'improv',href:'#note/sessions/2018/improv',alt:'one off in thousand needles'},
                {title:"2018 recap",href:"#note/sessions/2018/recap",alt:""}
            ]);
        }
    });
});