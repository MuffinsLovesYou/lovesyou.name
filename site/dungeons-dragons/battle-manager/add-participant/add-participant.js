import { lite } from '../../../../scripts/homerolled/lite.js';
import { autoComplete } from '../../../../scripts/vendor/autocomplete.js';
import { monsters } from '../../../../5e/monsters.js';
import { Modal } from '../../../common/modal/modal.js';

export let view = lite.extend({
    name : 'add-participant'
    , contentUrl : 'site/dungeons-dragons/battle-manager/add-participant/add-participant.html'
    , onContentBound : function() {
        let view = this;
        view.setControls();

        view.controls.init.value = view.rollD20();

        view.setAutoComplete();
        view.controls.init.focus();
    }
    , controls : {
        init : null, name : null, hp : null, add : null
    }
    , setControls : function() {
        let view = this;
        view.controls.init = document.querySelector('#txtInit');
        view.controls.name = document.querySelector('#txtName');
        view.controls.hp = document.querySelector('#txtHp');
        view.controls.count = document.querySelector('#txtCount');
        view.controls.add = document.querySelector('#btnAddParticipant');

        view.controls.add.addEventListener('click', view.onAddParticipantClicked.bind(this));
        view.controls.name.addEventListener('change', view.onNameChanged.bind(this));
        view.controls.name.addEventListener('keydown', view.onNameKeyDown.bind(this));
        view.controls.hp.addEventListener('keydown', view.onHpKeyDown.bind(this));
        view.controls.count.addEventListener('keydown', view.onCountKeyDown.bind(this));
    }
    , setAutoComplete : function() { 
        let monsterNames = Object.keys(monsters);

        new autoComplete({
            selector: '#txtName',
            minChars: 2,
            source: function(term, suggest) {
                term = term.toLowerCase();
                let matches = monsterNames.filter(v => {
                    return v.toLowerCase().includes(term);
                });
                suggest(matches);                
            },
            onSelect : function(e) { 
                // Force .onNameChanged to be called
                e.target.dispatchEvent(new Event('change'));
            }
        });
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
        let view = this;
        view.controls.add.disabled = !view.isValid();

        let monster = monsters[e.target.value];
        if(monster) { view.setMonster(monster); }
    }
    , onNameKeyDown : function(e) {
        // Enter to submit if we have already selected a monster
        if(e.keyCode === 13) { 
            if(e.target.enterPressed) { this.addParticipant(); }
            else e.target.enterPressed = true;
        }
        else 
            e.target.enterPressed = false;
    }
    , onCountKeyDown : function(e) {
        if(e.keyCode === 13) { this.addParticipant(); }
    }
    , setMonster : function(monster) { 
        let view = this;
        view.controls.init.value = 
            view.rollD20() 
            + Math.floor((monster.Stats.Dex - 10) / 2);

        view.controls.hp.value = +/\d+/.exec(monster.Defenses.Hp)[0];
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

        for(let i = 1; i <= +view.controls.count.value; i++) {
            let participant = view.getParticipant();
            if(view.controls.count.value > 1) { 
                participant.id =  participant.id + ' ' + i;
            }
            view.parent.onParticipantAdded(participant);  
        }

        new Modal().hide();
    }
    , rollD20 : function() { 
        return Math.floor(Math.random() * 20) + 1;
    }
});
export let AddParticipant = view;