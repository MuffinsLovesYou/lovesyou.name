define([
    'lite'
    ,'scripts/homerolled/tiles'
], (lite, Tiles)=>{
    
    return lite.extend({
        content : `
        <div class='container'>
            <div class='row'>
                <div id='tiles' class='tiles'></div>
            </div>
        </div>`,
        onContentBound : function() {
            new Tiles().fill(document.getElementById('tiles'), [
                { title: 'the thousand kingdoms', href:'#dungeons-dragons/notes/places/the thousand kingdoms', alt: ''},
                { title: 'ivory tower', href:'#dungeons-dragons/notes/places/ivory tower', alt: '' },
                { title: 'larethian', href:'#dungeons-dragons/notes/places/larethian', alt: '' },
                { title: 'claw mountain', href:'#dungeons-dragons/notes/places/claw mountain', alt: '' },
                { title: 'ging onol', href:'#dungeons-dragons/notes/places/gingonol', alt: '' },
                { title: 'ramshackle', href:'#dungeons-dragons/notes/places/ramshackle', alt: ''},
                { title: 'toestub', href:'#dungeons-dragons/notes/places/toestub', alt: ''},
                { title: 'the stick', href:'#dungeons-dragons/notes/places/the stick', alt: ''}
            ]);
        }
    });
});