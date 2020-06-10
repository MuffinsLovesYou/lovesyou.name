import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    name : 'add-participant'
    , contentUrl : 'site/dungeons-dragons/battle-manager/add-participant/add-participant.html'
    , onContentBound : function() {
        let view = this;
        view.setControls();

        view.controls.init.focus();
    }
    , controls : {
        init : null, name : null, hp : null, add : null
    }
    , setControls : function() {
        let view = this;
        view.controls.init = document.getElementById('txtInit');
        view.controls.name = document.getElementById('txtName');
        view.controls.hp = document.getElementById('txtHp');
        view.controls.add = document.getElementById('btnAddParticipant');

        view.controls.add.addEventListener('click', view.onAddParticipantClicked.bind(this));
        view.controls.name.addEventListener('change', view.onNameChanged.bind(this));
        view.controls.hp.addEventListener('keydown', view.onHpKeyDown.bind(this));
    }
    , getParticipant : function() { 
        let view = this;
        return { 
            init : view.controls.init.value,
            id : view.controls.name.value,
            name : view.controls.name.value,
            hp : view.controls.hp.value
        }
    }
    , onHpKeyDown : function(e) { 
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    , onNameChanged : function(e) {
        this.controls.add.disabled = !this.isValid();
    }
    , onAddParticipantClicked : function() { 
        this.addParticipant();
    }
    , isValid : function() { 
        return !!this.controls.name.value;
    }
    , addParticipant : function() {
        let view = this;
        if(!view.isValid()) { return ; }
        let participant = view.getParticipant();
        view.parent.onParticipantAdded(participant);
    }
});
export let AddParticipant = view;