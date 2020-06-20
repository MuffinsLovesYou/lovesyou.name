import { lite } from '../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../scripts/homerolled/tiles.js';

export let view =  lite.extend({
    content : `
    <div>
        <div>
            <p>DM notes.</p>
        </div>
        <div>
            <div id='tiles' class='tiles'></div>
        </div>
    </div>`,
    onContentBound : function() {
        new Tiles().fill(document.getElementById('tiles'), [
            { title: '05-2020', href: '#dungeons-dragons/notes/05-2020?path=sessions/05-2020', alt: 'downtime and new arc' },
            { title: '03-2020', href: '#dungeons-dragons/notes/05-2020?path=sessions/03-2020', alt: 'hit and run in the necropolis' },
            { title: '02-2020', href: '#dungeons-dragons/notes/05-2020?path=sessions/02-2020', alt: 'dealing with vampires' },
            
            { title: '2019', href: '#dungeons-dragons/notes/archives/2019', alt: '2019 archive'},
            { title: '2018', href: '#dungeons-dragons/notes/archives/2018', alt: '2018 archive'},
            { title: '2017', href: '#dungeons-dragons/notes/archives/2017', alt: '2017 archive'},
            { title: 'places', href: '#dungeons-dragons/notes/places', alt:''}
        ]);
    }
});
