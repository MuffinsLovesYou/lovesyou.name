import { lite } from '../../../scripts/homerolled/lite.js';
import { SpellsTab } from './tabs/spells.js';
import { MonstersTab } from './tabs/monsters.js';
import { ItemsTab } from './tabs/items.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/lookups/lookups.html',
    initialize : function() {
    }
    , onContentBound : function() {
        this.initializeTabs();
        
        new SpellsTab({
            container : document.getElementById('spells-container')
        }).attach();

        new MonstersTab({
            container : document.getElementById('monsters-container')
        }).attach();

        new ItemsTab({
            container : document.getElementById('items-container')
        }).attach();
    }
    , initializeTabs : function() { 
        let vm = this;
        vm.tabs = {};
        let tabs = document.querySelectorAll('.tabs span');
        Array.from(tabs).forEach((tab) => {
            let inner = tab.innerHTML;
            let container = document.getElementById(inner + '-container');
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
});