import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { Modal } from '../../../common/modal/modal.js';
import { SpellBox } from '../../elements/spellbox/spellbox.js';
import { spells } from '../../../../5e/spells.js';

export let view = lite.extend({
    content : ' ',
    initialize : function() { 
        this.loadData(this.data);
    }
    , loadData : function (characterSpells) { 
        if(!characterSpells) { return; }
        let _spells = [];
        for(let s in characterSpells) { 
            _spells.push(characterSpells[s]); 
        }

        _spells.forEach(s => { s.Ritual = s.Ritual ? 'Yes' : 'No'; });
        this.setData(_spells);
    }, 
    onContentBound : function() { 
        this.loadGrid(); 
    }
    , loadGrid : function() { 
        let view = this;

        new Gridify({
            container : 'spells-container',
            data : view.data,
            columns : [
                { 
                    field : 'Name', 
                    header : 'Name',
                    style : 'text-align:left; text-decoration:underline',
                    sort : true,
                    click: (e)=>{ 
                        let _spell = spells[e.target.innerHTML];
                        new Modal({ 
                            container : document.getElementById('modal-container') 
                        }).attach();
                        new SpellBox({
                            data : _spell,
                            container : document.getElementById('modal-content'),
                        }).attach();
                    } 
                },
                { field : 'Level', header : 'Level', sort : true },
                { field : 'CastingTime', header : 'Cast Time', style : 'max-width:300px; text-align:left' },
                { field : 'Ritual', header : 'Ritual', filter : view.getRitualFilter()  },
                { field : 'Range', header : 'Range' },
                { field : 'Duration', header : 'Duration' } 
            ],
            className : 'grid'
        });
    }
    , getRitualFilter : function() { 
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
export let SpellsTab = view;