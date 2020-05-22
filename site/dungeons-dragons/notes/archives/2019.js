import { lite } from '../../../../scripts/homerolled/lite.js';
import { Tiles } from '../../../../scripts/homerolled/tiles.js';

export let view = lite.extend({
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
        new Tiles().fill(document.getElementById('tiles'), [
            { title: '09-2019', href: '#dungeons-dragons/notes/2019/09-2019?path=sessions/2019/09-2019', alt: 'an unforgiving environment' },
            { title: '07-2019', href: '#dungeons-dragons/notes/2019/07-2019?path=sessions/2019/07-2019', alt: 'arriving in the kingdoms' },
            { title: '04-2019', href: '#dungeons-dragons/notes/2019/04-2019?path=sessions/2019/04-2019', alt: '...' },
            { title: '03-2019', href: '#dungeons-dragons/notes/2019/03-2019?path=sessions/2019/03-2019', alt: 'divine drama' },
        ]);
    }
});
