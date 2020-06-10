import { lite } from '../../../scripts/homerolled/lite.js';
import { Dice } from '../../common/dice/dice.js';
import { AddParticipant } from './add-participant/add-participant.js';
import { ParticipantsGrid } from './participants-grid/participants-grid.js';
import { Modal } from '../../common/modal/modal.js';

export let view = lite.extend({
    name : 'battle-manager'
    , contentUrl : 'site/dungeons-dragons/battle-manager/battle-manager.html'
    , onContentBound : function(content) { 
        let view = this;
        view.appendDice();

        document.getElementById('btnShowAddParticipantModal')
            .addEventListener('click', view.btnShowAddParticipantModalClicked.bind(view));

        view.drawGrid();
    }
    , appendDice : function() { 
        new Dice({
            container : document.getElementById('dice-container')
        }).attach();
    }
    , btnShowAddParticipantModalClicked : function() { 
        let view = this;

        new Modal().attach(document.getElementById('modal-container'));
        new AddParticipant({
            parent : view,
            container : document.getElementById('modal-content'), 
            onParticipantAdded : view.onParticipantAdded.bind(view), 
        }).attach();
    }
    , onParticipantAdded : function(participantData) {
        let view = this;
        view.data.push(participantData);
        view.drawGrid();
    }
    // mock data for prototyping
    , data : [
        { init : 1, id : 'test1', name : 'test1', hp : 5 },
        { init : 2, id : 'test2', name : 'test2', hp : 10 },
    ]
    , drawGrid : function() { 
        let view = this;
        new ParticipantsGrid({
            parent : view, 
            container : document.getElementById('battle-table'),
            data : view.data
        }).attach();

    }
});
export let BattleManager = view;

