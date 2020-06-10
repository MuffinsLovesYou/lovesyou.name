import { lite } from '../../../scripts/homerolled/lite.js';
import { Dice } from '../../common/dice/dice.js';
import { AddParticipant } from './add-participant/add-participant.js';
import { ParticipantsGrid } from './participants-grid/participants-grid.js';
import { Modal } from '../../common/modal/modal.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/battle-manager/battle-manager.html'
    , onContentBound : function(content) { 
        let view = this;
        view.appendDice();

        document.getElementById('btnAddParticipant')
            .addEventListener('click', view.onAddParticipantClicked);

        view.data = view.mockData;
        view.drawGrid();
    }
    , appendDice : function() { 
        new Dice({
            container : document.getElementById('dice-container')
        }).attach();
    }
    , onAddParticipantClicked : function() { 
        new Modal().attach(document.getElementById('modal-container'));
        new AddParticipant({
            container : document.getElementById('modal-content')
        }).attach();
    }
    , mockData : [
        { init : 1, id : 'test1', name : 'test1', hp : 5 },
        { init : 2, id : 'test2', name : 'test2', hp : 10 },
    ]
    , drawGrid : function() { 
        let view = this;
        new ParticipantsGrid({
            container : document.getElementById('battle-table'),
            data : view.data
        }).attach();

    }
});
export let BattleManager = view;

