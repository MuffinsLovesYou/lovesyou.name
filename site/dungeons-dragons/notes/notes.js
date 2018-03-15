define([
    'lite'
    ,'tiles'
], function (Lite, tiles) {
    
    return Lite.extend({
        content_url : 'site/dungeons-dragons/notes/notes.html',
        onContentBound : function() {
            tiles.fill([
                {title:"02-2018",href:"#note/02-2018",alt:"on the road again?"},
                {title:"12-2017",href:"#note/12-2017",alt:"in the shadowfel 2"},
                {title:"10-2017",href:"#note/10-2017",alt:"in the shadowfel"},
                {title:"09-2017",href:"#note/09-2017",alt:"at claw mountain"},
                {title:"08-2017",href:"#note/08-2017",alt:"travels part 3"},
                {title:"06-2017",href:"#note/06-2017",alt:"travels part 2"},
                {title:"04-2017",href:"#note/04-2017",alt:"long travels"},
                {title:"worldbuilding-emperors",href:"#notes/emperors",alt:"timeline of emperors"},
                {title:"recap-01/2017",href:"#notes/01-2017",alt:"recap with my new notes."}
            ]);
        }
    });
});