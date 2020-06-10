import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';

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
                { field : 'init', header : 'Init' },
                { field : 'id', header : 'Id' },
                { field : 'name', header : 'Name' },
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
                    case 'name' : 
                        // attach onclick for known monsters
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
    }
    , tdInit : function(td) { 
        let input = document.createElement('input');
        input.value = td.innerText;
        input.style = 'width:50px;'
        td.innerText = '';

        input.addEventListener('change', () => { 
            td.value = input.value; 
            // sort by init before binding
        });
        return input;
    }
    , tdId : function(td) {
        let input = document.createElement('input');
        input.value = td.innerText;
        input.style = 'width:50px;'
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
        // we'll probably need to revisit the grid here 
        // set the .value of the td and use that for getting and setting data
    }
    , tdRemoveButton : function(td) { 
        let view = this;
        let button = document.createElement('button');
        button.innerHTML = '-'
        button.className = 'btn btn-dark btn-sm';
        button.style.width = '30px';
        button.style.lineHeight = '.75'

        button.addEventListener('click', function() { 
            console.log(view.grid.data.get());
            window.grid = view.grid;
        });

        return button
    }

});
export let ParticipantsGrid = view;