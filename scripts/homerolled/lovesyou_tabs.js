define([],()=>{

    let Liteabs = function(){
        let tabs = this;
        let _tabs = {};
        
        tabs.stylize = function() {
            tabs.load_css();
            let els = document.querySelectorAll('.tabs span');
            Array.from(els).forEach((tab, i)=>{
                tab.style.display = 'inline-block;' // can be css
                let inner = tab.innerHTML;
                let container = document.getElementById(inner+'_container');
                container.style.display = 'none';
                _tabs[inner] = {
                    'el' : tab,
                    'container' : container
                }
                tab.addEventListener('click', (e)=>{
                    tabs.on_tab_click(e);
                });
                if(!i)tab.click();
            });
        }
        tabs.on_tab_click = function(event){
            let inner = event.target.innerHTML;
            for(let t in _tabs){
                let tab = _tabs[t];
                let selected = (tab.el.innerHTML === inner);
                t.el.className = (selected) ? 'selected' : '';
                t.container.style.display = (selected) ? 'block' : 'none'
            }
        }
        tabs.load_css = function() {
            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.type ='text/css';
            css.href = 'css/homerolled/lovesyou_tabs.css';
            let head = document.getElementsByTagName('head')[0];
            let links = document.getElementsByTagName('link');
            let has = Array.from(links).some((link)=>{
                return link.href === css.href;
            });
            if(!has) head.appendChild(css);
        }
    }
    return Liteabs;
});


