define([
    'lite'
    ,'scripts/homerolled/tiles'
], function (lite, Tiles) {
    
    return lite.extend({
        content : `
        <div class='container'>
            <div class='row'>
                <p>DM notes.</p>
            </div>
            <div class='row'>
                <div id='tiles' class='tiles'></div>
            </div>
        </div>`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles'), [
                { title: '09-2019', href: '#dungeons-dragons/notes/sessions/09-2019',alt: 'an unforgiving environment'},
                { title: '07-2019', href: '#dungeons-dragons/notes/sessions/07-2019',alt: 'arriving in the kingdoms'},
                { title: '04-2019', href: '#dungeons-dragons/notes/sessions/04-2019',alt: '...'},
                { title: '03-2019', href: '#dungeons-dragons/notes/sessions/03-2019',alt: 'divine drama'},
                { title: '2018', href: '#dungeons-dragons/notes/archives/2018', alt: '2018 archive'},
                { title: '2017', href: '#dungeons-dragons/notes/archives/2017', alt: '2017 archive'},
                { title: 'places', href: '#dungeons-dragons/notes/places', alt:''}
            ]);
        }
    });
});