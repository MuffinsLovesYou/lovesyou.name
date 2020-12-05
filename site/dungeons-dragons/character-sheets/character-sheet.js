import { lite } from '../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';
import { MainTab } from './tabs/main.js';
import { SpellsTab } from './tabs/spells.js';
import { markdown } from '../../../scripts/homerolled/markdown-parser.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/character-sheets/character-sheet.html',
    onContentBound : function () {
        let vm = this;

        vm.initializeTabs();
    }
    , initialize : function() {
        let view = this;
        view.loadStyleSheet('site/dungeons-dragons/character-sheets/character-sheet.css');   
        view.loadCharacter();
    }
    , loadCharacter : function() {
        let view = this;
        import(view.getDataUrl())
            .then(charData => {
                view.setData(charData[this.getCharId()]);
            });
    }
    , getDataUrl : function() { 
        let base = '../../../5e/char-sheets/'
        return base + this.getFileName();
    }
    , getFileName : function() {
        let hash = location.hash;
        let path = hash.indexOf('path') > -1 
            ? hash.substr(hash.indexOf('path') + 5) + '.js'
            : hash.split('/').slice(2).join('/') + '.js';
        // Apache servers are case-sensitive
        return path.toLocaleLowerCase();
    }
    , getCharId : function() {
        return location.hash
            .split('?')[0]
            .split('/').pop();
    }
    , onDataBound : function (data) {
        let view = this;

        view.loadMainTab(data);
        view.loadBackgroundTab(data);
        view.loadNotesTab();
        view.loadSkillsTab(data);
        view.loadItemsTab(data);
        view.loadSpellsTab(data);
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
        for(let t in vm.tabs) {
            let tab = vm.tabs[t];
            let selected = (tab.el.innerHTML === inner);
            tab.el.className = (selected) ? 'selected' : '';
            tab.container.style.display = (selected) ? 'block' : 'none';
        }
    }
    , loadMainTab : function(data){
        new MainTab({
            data : data, // might wanna make data binding more obvious 
            container : document.getElementById('character-main')
        }).attach();
    }
    , loadBackgroundTab : function(data){
        let background = this.container.querySelector('#character-background');
        if(!data.Background) { document.getElementById('#backgroundTab').style.display = 'none'; } 

        var markup = '';
        for(let b in data.Background)
            markup += '* **' + b + '**: ' + data.Background[b] + '  \n';
        markup = markdown.parse(markup);
        background.innerHTML = markup;
    }
    , loadNotesTab : function(){
        let view = this;
        let notesContainer = view.container.querySelector('#character-notes');
        let notesPath = '5e/notes/char-notes/' + view.getFileName().replace('.js', '.md');

        let notes = lite.extend({
            container : notesContainer,
            contentUrl : notesPath,
            onContentLoaded : function(content) { 
                this.content = markdown.parse(content);
            }
        });
        new notes().attach();
    }
    , loadSkillsTab : function(data) {
        let view = this;
        let _skills = [];
        for(let s in data.Skills) { _skills.push(data.Skills[s]); }
        _skills.forEach(s => { s.Trained = s.Trained ? 'Yes' : 'No' });

        new Gridify({
            container : 'skills-container',
            data : _skills,
            columns : [
                { field : 'Name', header : 'Name', style : 'text-align:left', sort : true },
                { field : 'Ability', header : 'Ability', style : 'text-align:center', sort : true },
                { field : 'Trained', header : 'Trained', style : 'text-align:center', sort : true },
                { field : 'Bonus', header : 'Bonus', style : 'text-align:right', sort : view.numberSort }
            ],
        });
    }
    , loadItemsTab : function(data) {
        let view = this;

        let _items = [];
        for(let i in data.Items) {
            if(typeof(data.Items[i]) !== 'object') continue;
            _items.push(data.Items[i]);
        }
        new Gridify({
            container : 'items-container',
            data : _items,
            columns : [
                { field : 'Name', header : 'Name', style : 'text-align:left', sort : true },
                { field : 'Count', header : 'Count', style : 'text-align:right' },
                { field : 'Value', header : 'Value', sort: view.coinSort },
                { field : 'Weight', header : 'Weight', style : 'text-align:right', sort : view.numberSort }
            ],
            className : 'grid'
        });
        let totalWeight = _items.reduce((acc, item)=>{ return (acc += (item.Weight || 0)); }, 0);
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.CarryWeight;
    }
    , loadSpellsTab : function(data) {
        if(!data) {
            return document.getElementById('spellsTab').style.display = 'none'; 
        }   
    
        new SpellsTab({
            container : document.getElementById('spells-container'), 
            data : data.Spells
        }).attach();
    }  
    , numberSort : function(a, b) {
        if(+a === +b) { return 0; }
        else return +a > +b ? 1 : -1;
    }
    , coinSort : function(a, b) { 
        let coinValues = [
            { suffix : 'cp', rate : 1 },
            { suffix : 'sp', rate : 10 },
            { suffix : 'ep', rate : 50 },
            { suffix : 'gp', rate : 100 },
            { suffix : 'pp', rate : 1000 },
        ];
        
        let convertToCopper = function(value) { 
            let conversion = coinValues.find(v => value.includes(v.suffix));
            if(!conversion) { return -1; }
            value = +value.replace(conversion.suffix, '');
            value = value * conversion.rate;
            return value;
        }
        
        a = convertToCopper(a);
        b = convertToCopper(b);
        if(a === b) { return 0; }
        return a > b ? 1 : -1;
    }
});
