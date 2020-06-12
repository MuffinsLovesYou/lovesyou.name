import { lite } from '../../../scripts/homerolled/lite.js';
import { Dice } from '../../common/dice/dice.js';
import { AddParticipant } from './add-participant/add-participant.js';
import { ParticipantsGrid } from './participants-grid/participants-grid.js';
import { Modal } from '../../common/modal/modal.js';

export let view = lite.extend({
    name : 'battle-manager'
    , contentUrl : 'site/dungeons-dragons/battle-manager/battle-manager.html'
    , initialize : function() { 
        this.data = [];
    }
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

        new Modal().show();
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
        new Modal().hide();
    }
    , drawGrid : function() { 
        let view = this;
        if(!view.data.length) { return; }
        new ParticipantsGrid({
            parent : view, 
            container : document.getElementById('battle-table'),
            data : view.data
        }).attach();

    }
});
export let BattleManager = view;

