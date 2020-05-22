import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { spells } from '../../../../5e/spells.js';
import { SpellBox } from '../../elements/spellbox/spellbox.js';
import { Modal } from '../../../common/modal/modal.js';

export let SpellsTab =  lite.extend({
    content : `<div id='spells-table'></div><div id='spellbox-container'></div>`,
    onContentBound : function() {
        let view = this;
        view.draw_table();
    },
    draw_table : function() {
        let grid = new Gridify('spells-table')
        grid.initialize({
            data : spells,
            columns : [
                { 
                    field : 'Name', 
                    style : 'text-align:left; text-decoration:underline',
                    sort : true,
                    filter : true,
                    click: (e)=>{ 
                        new Modal({
                            container: document.getElementById('modal-container')
                        }).attach();
                        new SpellBox({
                            data : spells[e.target.innerHTML],
                            container : document.getElementById('modal-content')
                        }).attach();
                    } 
                },
                { field : 'Level', filter: true, sort:true, style:'width:40px;text-align:right' },
                { field : 'School', filter : true, sort : true, style : 'width:75px'},
                { field : 'CastingTime', filter : true, sort:true, style : 'max-width:75px;' },
                { field : 'Range', filter : true, sort:true, style:'width:50px;' },
                { field : 'Duration', filter : true, sort:true, } 
            ],
            paging : true
        });
    }        
});
