import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';

export let view = lite.extend({
    content : ' '
    , onContentBound : function() {
        this.drawGrid();
    }
    , drawGrid : function() {
        let view = this;
        new Gridify({
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
                    break;
                }
            }
        });
    }

});
export let ParticipantsGrid = view;