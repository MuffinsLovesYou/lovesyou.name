define([],()=>{
    let Styler = function(){
        let styler = this;
        styler.tabs = { }

        styler.stylize = function(){
            var fileref = document.createElement("link");
            fileref.rel = "stylesheet";
            fileref.type = "text/css";
            fileref.href = 'css/homerolled/monsterbox.css';
            document.getElementsByTagName("head")[0].appendChild(fileref)

            let tabs = document.querySelectorAll('#monster_tabs span');
            for(let t = 0; t < tabs.length; t++){
                let tab = tabs[t];
                tab.style.display='inline-block;'
                let inner = tab.innerHTML;
                let container = document.getElementById('monster_'+inner);
                container.style.display = 'none';
                styler.tabs[inner] = {
                    'tab' : tab
                    ,'container' : container
                }
                tab.addEventListener('click', (e)=>{
                    let inner = e.target.innerHTML;
                    for(let t in styler.tabs){
                        t = styler.tabs[t];
                        let selected = (t.tab.innerHTML === inner);
                        t.tab.className = (selected) ? 'selected' : '';
                        t.container.style.display = (selected) ? 'block' : 'none';
                    }
                });
            }
            tabs[0].click();
        }
        return styler;
    }
    return new Styler();
});


