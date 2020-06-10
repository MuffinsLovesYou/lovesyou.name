import { lite } from '../../../scripts/homerolled/lite.js';
import { Dice } from '../../common/dice/dice.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';
import { AddParticipant } from './add-participant/add-participant.js';
import { Modal } from '../../common/modal/modal.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/battle-manager/battle-manager.html'
    , onContentBound : function(content) { 
        let view = this;
        view.appendDice();

        document.getElementById('btnAddParticipant')
            .addEventListener('click', view.onAddParticipantClicked);

        this.data = mockData;
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
        new Gridify({
            container : 'battle-table',
            columns : [
                { field : 'init', header : 'Init' },
                { field : 'id', header : 'id' },
                { field : 'name', header : 'name' },
                { field : 'hp', header : 'HP' }, 
                { field : 'remove' }
            ]
        });
    }
});
export let BattleManager = view;



/* UI/UX  
    we want to simplify our battle management into a single ui
    currently we have dice on one page 
    we have tracking of initiative and hp on another 
    and we have monster stats on individual tabs 

    We need: 
        To be able to add combatants to a combat
            Add Combatant button 
                Raise popup
                Give them an init
                    auto-roll d20 + 0
                Give them a name 
                    Offer autocomplete options. If name is monster,  
                        pull monster stats on select
                Fill in hp (optional), value will be put into grid
            
        Table: 
            Adjustable Init
                Changing init re-orders them in grid 
            Adjustable ID. Defaults to name, but can be changed to things like 'Green 1'
            Name, if known monster, clicking name raises stats in modal
            Adjustable HP / HP with scratch-pad
            '-' remove from grid button/option
        Table cells will need to be editable, we'll need to do some fancy stuff 
        with overriding them on creation 
    


*/
