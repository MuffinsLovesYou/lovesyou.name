import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { monsters } from '../../../../5e/monsters.js';
import { Modal } from '../../../common/modal/modal.js';
import { MonsterBox } from '../../elements/monsterbox/monsterbox.js';

export let view = lite.extend({
    content : ' '
    , onContentBound : function() {
        this.drawGrid();
    }
    , drawGrid : function() {
        let view = this;
        let grid = new Gridify({
            container : 'battle-table-container',
            id : 'battle-table',
            data : view.data,
            columns : [
                { field : 'init', header : 'Init', sort : view.numberSort,
                    style : 'width:50px; text-align:right;' },
                { field : 'id', header : 'Id',
                    style : 'width:100px;' },
                { field : 'name', header : 'Name', click : view.onNameClick,
                    style : 'width:150px; text-align:center;' },
                { field : 'hp', header : 'HP', 
                    style : 'width:150px;' }, 
                { field : 'remove', header : 'Remove', 
                    style : 'width:75px; text-align:center;' }
            ],
            onTableCellCreated : function(td, colDef) {
                switch(colDef.field) { 
                    case 'init' :       
                        td.innerText = '';
                        td.appendChild(view.tdInit(td));
                    break;
                    case 'id' :     
                        td.innerText = '';
                        td.appendChild(view.tdId(td));
                    break;
                    case 'hp' : 
                        td.innerText = '';
                        td.appendChild(view.tdHP(td));
                    break;
                    case 'remove': 
                        td.innerText = '';
                        td.appendChild(view.tdRemoveButton(td));
                    break;
                }
            },
            style : 'table-layout:fixed;'

        });
        view.grid = grid;
        view.grid.sorting.sort('init');
    }
    , numberSort : function(a, b) {
        if(a === b) { return 0; }
        return +a > +b ? 1 : -1;
    }
    , onNameClick : function(e) { 
        let monster = monsters[e.target.value];
        if(!monster) { return; }
        new Modal().show();
        new MonsterBox({
            container : document.getElementById('modal-content'),
            data : monster
        }).attach();
    }
    , tdInit : function(td) { 
        let view = this;
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;
        
        input.addEventListener('change', () => { 
            td.value = input.value; 
            // sort twice so we stay descending
            view.grid.sorting.sort('init');
            view.grid.sorting.sort('init');
        });
        return input;
    }
    , tdId : function(td) {
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;

        input.addEventListener('change', () => { 
            td.value = input.value;
        });

        return input;
    }
    , tdHP : function(td) { 
        let view = this;
        let input = document.createElement('input');
        input.value = td.value;
        input.style = td.style.cssText;

        input.addEventListener('change', () => {
            td.value = input.value;
        });

        return input;
     }
    , tdRemoveButton : function(td) { 
        let view = this;

        let button = document.createElement('button');
        button.innerHTML = '-'
        button.className = 'btn-inline';
        button.style.width = '60%';

        button.addEventListener('click', function() { 
            td.parentElement.parentElement.removeChild(td.parentElement);
            view.parent.data = view.grid.data.get();
        });

        return button
    }
});
export let ParticipantsGrid = view;



