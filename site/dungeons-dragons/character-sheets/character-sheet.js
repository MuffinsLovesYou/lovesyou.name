import { lite } from '../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';
import { MainTab } from './tabs/main.js';
import { Modal } from '../../common/modal/modal.js';
import { SpellBox } from '../elements/spellbox/spellbox.js';
import { spells } from '../../../5e/spells.js';
import { markdown } from '../../../scripts/homerolled/markdown-parser.js';
import { DiceRoller } from '../../../scripts/homerolled/dice/dice.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/character-sheets/character-sheet.html',
    onContentBound : function () {
        let vm = this;

        vm.initializeTabs();

        import('../../common/dice/dice.js')
            .then(dice => {
                new dice.view().attach(document.getElementById('dice-container'));
            });
    }
    , initialize : function() {
        let view = this;
        view.loadCharacter();
        view.loadStyleSheet('css/homerolled/character-sheet.css');   
    }
    , loadCharacter : function() {
        let view = this;
        import(view.getDataUrl())
            .then(charData => {
               view.setData(charData.Pepper);
            });
    }
    , getDataUrl : function() { 
        let hash = location.hash;
        let base = '../../../5e/char-sheets/'
        return hash.indexOf('path') > -1 
            ? base + hash.substr(hash.indexOf('path') + 5) + '.js'
            : base + hash.split('/').slice(2).join('/') + '.js';
    }
    , onDataBound : function (data) {
        let view = this;
        view.mainTab(data);
        view.backgroundTab(data);
        view.notesTab();
        view.skillsTab(data);
        view.itemsTab(data);
        view.spellsTab(data);
    }
    , initializeTabs : function() { 
        let vm = this;
        vm.tabs = {};
        let tabs = document.querySelectorAll('#characterTabs span');
        Array.from(tabs).forEach((tab) => {
            let inner = tab.innerHTML;
            let container = document.getElementById('character-'+inner);
            container.style.display = 'none';
            vm.tabs[inner] = {
                'el' : tab
                ,'container' : container
            }
        
            tab.addEventListener('click', vm.onTabClicked.bind(vm));       
        });
        tabs[0].click();
    }
    , onTabClicked : function(event) { 
        let vm = this;
        let inner = event.target.innerHTML;
        for(let t in vm.tabs){
            let tab = vm.tabs[t];
            let selected = (tab.el.innerHTML === inner);
            tab.el.className = (selected) ? 'selected' : '';
            tab.container.style.display = (selected) ? 'block' : 'none';
        }
    }
    , mainTab : function(data){
        new MainTab({
            data : data, // might wanna make data binding more obvious 
            container : document.getElementById('character-main')
        }).attach();
    }
    , notesTab : function(){
        let view = this;
        var notesContainer = view.container.querySelector('#character-notes');
        let x = new lite.extend({
            container : notesContainer,
            content : `<div id='notes'></div>`,
            data_url : '5e/notes/char-notes/' + window.location.hash.split('/').splice(-1) + '.md',
            onDataLoaded : function(data){
                this.data = markdown.parse(data);
            },
            onDataBound : function(){
                this.container.querySelector('#notes').innerHTML += this.data;
            }
        });
        new x().attach();
    }
    , skillsTab : function(data){
        window.data = data;
        let _skills = [];
        for(let s in data.Skills) { _skills.push(data.Skills[s]); }

        new Gridify('skills-container').initialize({
            data : _skills,
            columns : [
                { field : 'Name', style : 'text-align:left', sort : true },
                { field : 'Ability', sort : true },
                { field : 'Trained', format : (x) => { return x ? 'Yes' : 'No'; }, sort : true },
                { field : 'Bonus', style : 'text-align:right', sort : true}
            ],
        });
    }
    , backgroundTab : function(data){
        let background = this.container.querySelector('#character-background');
        if(!data.Background) { document.getElementById('#backgroundTab').style.display = 'none'; } 

        var markup = '';
        for(let b in data.Background)
            markup += '* **' + b + '**: ' + data.Background[b] + '  \n';
        markup = markdown.parse(markup);
        background.innerHTML = markup;
    }
    , itemsTab : function(data) {
        let _items = [];
        for(let i in data.Items) {
            if(typeof(data.Items[i]) !== 'object') continue;
            _items.push(data.Items[i]);
        }
        new Gridify('items-container').initialize({
            data : _items,
            columns : [
                { field : 'Name', style : 'text-align:left', sort : true },
                { field : 'Count', style : 'text-align:right' },
                { field : 'Value', sort:true },
                { field : 'Weight', style : 'text-align:right', sort : true }
            ],
        });
        let totalWeight = _items.reduce((acc, item)=>{ return (acc += (item.Weight || 0)); }, 0);
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.CarryWeight;
    }
    , spellsTab : function(data) {
        let _spells = [];
        for(let s in data.Spells) {
            if(typeof(data.Spells[s]) !== 'object') continue;
            _spells.push(data.Spells[s]);
        }
        new Gridify('spells-container').initialize({
            data : _spells,
            columns : [
                { 
                    field : 'Name', 
                    style : 'text-align:left; text-decoration:underline',
                    sort : true,
                    click: (e)=>{ 
                        let _spell = spells[e.target.innerHTML];
                        new Modal({ 
                            container : document.getElementById('modal-container') 
                        }).attach();
                        new SpellBox({
                            data : _spell,
                            container : document.getElementById('modal-content'),
                        }).attach();
                    } 
                },
                { field : 'Level', sort : true },
                { field : 'CastingTime', style : 'max-width:300px; text-align:left' },
                { field : 'Range' },
                { field : 'Duration' } 
            ],
        });
        if(!_spells.length) document.getElementById('spellsTab').style.display = 'none';    
    }
});
