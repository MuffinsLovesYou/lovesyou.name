define([],()=>{

    let LiteTabs = function(){
        let tabs = this;
        let _tabs = {};
        
        tabs.stylize = function() {
            // this will register multiple clicks if you check for tabs more than once
            // we need to stylize per container. 
            let els = document.querySelectorAll('.tabs span');
            Array.from(els).forEach((tab, i)=>{
                tab.style.display = 'inline-block;' // can be css
                let inner = tab.innerHTML;
                let container = document.getElementById(inner+'_container');
                if(!container) container = document.querySelector('[tab="'+ inner +'"]')
                container.style.display = 'none';
                _tabs[inner] = {
                    'el' : tab,
                    'container' : container
                }
                tab.addEventListener('click', (e)=>{
                    tabs.__on_tab_click(e);
                });
                if(!i)tab.click();
            });
        }
        tabs.__on_tab_click = function(event){
            let inner = event.target.innerHTML;
            for(let t in _tabs){
                let tab = _tabs[t];
                let selected = (tab.el.innerHTML === inner);
                tab.el.className = (selected) ? 'selected' : '';
                tab.container.style.display = (selected) ? 'block' : 'none'
            }
        }

    }
    return LiteTabs;
});


