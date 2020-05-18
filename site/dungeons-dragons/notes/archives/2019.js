define([
    'lite'
    ,'scripts/homerolled/tiles'
], function (lite, Tiles) {
    return lite.extend({
        content : `
        <div class='container'>
            <div class='row'>
                <div class='col-12'>
                    <p>2019 saw the end of the Ging Onol arc and the beginning of the Tundra arc.</p>
                </div>
            </div>
            <div class='row'>
                <div id='tiles' class='tiles'></div>
            </div>
        </div>`,
        onContentBound : function() {
            Tiles().fill(document.getElementById('tiles'), [
                { title: '09-2019', href: '#dungeons-dragons/notes/09-2019?path=sessions/09-2019', alt: 'an unforgiving environment'},
                { title: '07-2019', href: '#dungeons-dragons/notes/07-2019?path=sessions/07-2019', alt: 'arriving in the kingdoms'},
                { title: '04-2019', href: '#dungeons-dragons/notes/04-2019?path=sessions/04-2019', alt: '...'},
                { title: '03-2019', href: '#dungeons-dragons/notes/03-2019?path=sessions/03-2019', alt: 'divine drama'},
            ]);
        }
    });
});