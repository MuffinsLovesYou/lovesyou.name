define([
    'lite'
    ,'tiles'
], (lite, tiles)=>{
    
    return lite.extend({
        content : `<div id='tiles' class='tiles'></div>`,
        onContentBound : function() {
            tiles.fill([
                {title:'the thousand kingdoms',href:'#note/places/the thousand kingdoms', alt:''},
                {title:'ivory tower',href:'#note/places/ivory tower', alt:'' },
                {title:'larethian',href:'#note/places/larethian', alt:'' },
                {title:'claw mountain',href:'#note/places/claw mountain', alt:'' },
                {title:'ging onol',href:'#note/places/gingonol', alt:'' },
                {title:'ramshackle',href:'#note/places/ramshackle', alt:''},
                {title:'toestub',href:'#note/places/toestub', alt:''},
                {title:'the stick',href:'#note/places/the stick',alt:''}
            ]);
        }
    });
});