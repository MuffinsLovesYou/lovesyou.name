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
            container : 'battle-table',
            data : view.data,
            columns : [
                { field : 'init', header : 'Init', sort : view.numberSort },
                { field : 'id', header : 'Id' },
                { field : 'name', header : 'Name', click : view.onNameClick },
                { field : 'hp', header : 'HP' }, 
                { field : 'remove', header : 'Remove' }
            ],
            onTableCellCreated : function(td, colDef) {
                switch(colDef.field) { 
                    case 'init' : 
                        td.appendChild(view.tdInit(td));
                    break;
                    case 'id' : 
                        td.appendChild(view.tdId(td));
                    break;
                    case 'hp' : 
                        td.appendChild(view.tdHP(td));
                    break;
                    case 'remove': 
                        td.innerText = '';
                        td.appendChild(view.tdRemoveButton(td));
                    break;
                }
            }
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
        input.value = td.innerText;
        input.style = 'width:50px;'
        td.innerText = '';

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
        input.value = td.innerText;
        input.style = 'width:100px;'
        td.innerText = '';

        input.addEventListener('change', () => { 
            td.value = input.value;
        });

        return input;
    }
    , tdHP : function(td) { 
        let view = this;
        let input = document.createElement('input');
        input.value = td.innerText;
        td.innerText = '';

        input.addEventListener('change', () => {
            td.value = input.value;
        });

        return input;
     }
    , tdRemoveButton : function(td) { 
        let view = this;
        let button = document.createElement('button');
        button.innerHTML = '-'
        button.className = 'btn btn-dark btn-sm';
        button.style.width = '30px';
        button.style.lineHeight = '.75'

        button.addEventListener('click', function() { 
            td.parentElement.parentElement.removeChild(td.parentElement);
            view.parent.data = view.grid.data.get();
        });

        return button
    }
});
export let ParticipantsGrid = view;



