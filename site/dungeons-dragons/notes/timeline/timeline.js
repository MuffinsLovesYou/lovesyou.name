import { lite } from '../../../../scripts/homerolled/lite.js';

return lite.extend({
    content : `<div id='timeline' class='timeline'></div>`
    , dataLoad : function() {
        import('../../../../5e/notes/timeline.js')
            .then(r => {
                this.setData = r.timeline;
            });
    }
    ,initialize : function() {
        let view = this;
        this.load_css();
    }
    , load_css : function() {
        let css = document.createElement("link");
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = 'css/homerolled/timeline.css';
        let head = document.getElementsByTagName('head')[0];
        let links = document.getElementsByTagName('link');
        let has = Array.from(links).some((link)=>{
            return link.href === css.href;
        });
        if(!has) head.appendChild(css);            
    }
    , onDataLoaded : function(data){
    }
    , onContentBound : function() {
        let view = this;
        let data = view.data;

        let timeline = document.getElementById('timeline');
        data.forEach((item, idx)=>{
            let row = timeline.appendChild(document.createElement('div'));
            let left = row.appendChild(document.createElement('span'));
            left.className = 'timeline_left';
            let right = row.appendChild(document.createElement('span'));
            right.className = 'timeline_right';
            left.innerHTML = idx%2 ? item.Text : item.Year;
            right.innerHTML = idx%2 ? item.Year : item.Text;
        });
    }
});
