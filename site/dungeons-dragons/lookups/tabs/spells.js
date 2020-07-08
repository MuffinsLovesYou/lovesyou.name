import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { spells } from '../../../../5e/spells.js';
import { SpellBox } from '../../elements/spellbox/spellbox.js';
import { Modal } from '../../../common/modal/modal.js';

export let SpellsTab =  lite.extend({
    content : `<div id='spells-table'></div><div id='spellbox-container'></div>`,
    initialize : function() {
        this.setData();
    }
    , setData : function() {
        let _spells = [];
        for(let k in spells) { _spells.push(spells[k]); }
        _spells.forEach(s => { s.Ritual = s.Ritual ? 'Yes' : 'No'; });
        this.data = _spells;
    
    }
    , onContentBound : function() {
        let view = this;
        view.drawTable();
    },
    drawTable : function() {
        let view = this;
        

        new Gridify({
            container : 'spells-table',
            data : view.data,
            columns : [
                { 
                    field : 'Name', 
                    header : 'Name',
                    style : 'width:200px; text-align:left; text-decoration:underline;',
                    sort : true,
                    filter : true,
                    click : (e) => {
                        new Modal({
                            container: document.getElementById('modal-container')
                        }).attach();
                        new SpellBox({
                            data : spells[e.target.innerHTML],
                            container : document.getElementById('modal-content')
                        }).attach();
                    } 
                },
                { field : 'Level', header : 'Level', filter : true, sort : true, style: 'width:50px; text-align:right;' },
                { field : 'School', header : 'School', filter : true, sort : true, style : 'width:125px'},
                { field : 'CastingTime', header : 'Casting Time', filter : true, sort:true, style: 'width:125px;' },
                { field : 'Ritual', header : 'Ritual', filter : view.getRitualFilter(), style : 'width:50px; text-align:center;'},
                { field : 'Range', header : 'Range', filter : true, sort : true, style: 'width:100px; overflow:hidden;' },
                { field : 'Duration', header : 'Duration', filter : true, sort : true, style: 'width:100px;' } 
            ],

            paging : true,
            style : 'table-layout:fixed; width:750px;',
            className : 'grid',
            onTableCellCreated(td, options) {
                if(td.style.overflow === 'hidden') { td.title = td.innerText; }
            }
        });
    },
    getRitualFilter : function() { 
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.addEventListener('click', (e) => {
            e.target.value = e.target.checked;
        });

        let rule = function(cellValue, checked) { 
            return checked == 'true' ? cellValue === 'Yes' : true;
        }

        return { 
            control : checkBox,
            event : 'click',
            rule : rule
        }
    }        
});
