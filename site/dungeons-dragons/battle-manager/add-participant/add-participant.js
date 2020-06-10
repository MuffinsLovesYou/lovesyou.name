import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    name : 'add-participant'
    , contentUrl : 'site/dungeons-dragons/battle-manager/add-participant/add-participant.html'
    , onContentBound : function() {
        let view = this;

        document.getElementById('btnAddParticipant')
            .addEventListener('click', view.onAddParticipantClicked.bind(this));
    }
    , onAddParticipantClicked : function() { 
        let view = this;
        view.parent.onParticipantAdded({
            init : 3, id : 'test 3', name : 'test 3', hp : 100
        });
    }
});
export let AddParticipant = view;