define([
    'lite'
    ,'tiles'
], (Lite, tiles)=>{
    return Lite.extend({
        content : `<div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:'ivory tower',href:'#note/places/ivory tower', alt:'' },
                {title:'larethian',href:'#note/places/larethian', alt:'' },
                {title:'claw mountain',href:'#note/places/claw mountain', alt:'' },
                {title:'ging onol',href:'#note/places/gingonol', alt:'' }
            ]);
        }
    });
});