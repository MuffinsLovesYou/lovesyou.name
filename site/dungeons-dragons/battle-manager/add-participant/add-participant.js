import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    name : 'add-participant'
    , contentUrl : 'site/dungeons-dragons/battle-manager/add-participant/add-participant.html'
    , onContentBound : function() {
        let view = this;

        document.getElementById('btnAddParticipant')
            .addEventListener('click', view.onAddParticipantClicked.bind(this));
    }
    , getParticipant : function() { 
        return { 
            init : document.getElementById('txtInit').value,
            id : document.getElementById('txtName').value,
            name : document.getElementById('txtName').value,
            hp : document.getElementById('txtHp').value
        }
    }
    , onAddParticipantClicked : function() { 
        let view = this;

        let participant = view.getParticipant();
        view.parent.onParticipantAdded(participant);
    }
});
export let AddParticipant = view;