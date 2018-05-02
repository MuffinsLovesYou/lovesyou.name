
define([],()=>{
    // some of this is redundant with tabs script. 
    let Styler = function(){
        let styler = this;

        styler.tabs = { }
        styler.stylize = function(){
            styler.load_css();            
            let tabs = document.querySelectorAll('#character_tabs span');
            Array.from(tabs).forEach((tab)=>{
                tab.style.display='inline-block;'
                let inner = tab.innerHTML;
                let container = document.getElementById('character_'+inner);
                container.style.display = 'none';
                styler.tabs[inner] = {
                    'el' : tab
                    ,'container' : container
                }
            
                tab.addEventListener('click', (e)=>{
                    styler.tab_on_click(e);
                });       
            });
            tabs[0].click();
        }
        styler.tab_on_click = function(event){
            let inner = event.target.innerHTML;
            for(let k in styler.tabs){
                let tab = styler.tabs[k];
                let selected = (tab.el.innerHTML === inner);
                tab.el.className = (selected) ? 'selected' : '';
                tab.container.style.display = (selected) ? 'block' : 'none';
            }
        }
        styler.load_css = function() {
            let css = document.createElement("link");
            css.rel = "stylesheet";
            css.type = "text/css";
            css.href = 'css/homerolled/character-sheet.css';
            let head = document.getElementsByTagName('head')[0];
            let links = document.getElementsByTagName('link');
            let has = Array.from(links).some((link)=>{
                return link.href === css.href;
            });
            if(!has) head.appendChild(css);            
        }
        return styler;
    }
    return new Styler();
});


