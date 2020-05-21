define([
    'lite'
    ,'site/dungeons-dragons/lookups/tabs/spells'
    ,'site/dungeons-dragons/lookups/tabs/monsters'
    ,'site/dungeons-dragons/lookups/tabs/items'
],(lite, Spells, Monsters, Items)=>{
    return lite.extend({
        contentUrl : 'site/dungeons-dragons/lookups/lookups.html',
        initialize : function() {
            // need to revisit tabs 
            this.loadCSS('css/homerolled/character-sheet.css');
        }
        , onContentBound : function() {
            this.initializeTabs();
            new Spells({
                container : document.getElementById('spells-container')
            }).attach();

            new Monsters({
                container : document.getElementById('monsters-container')
            }).attach();

            new Items({
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
});