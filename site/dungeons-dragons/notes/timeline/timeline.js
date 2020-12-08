import { lite } from '../../../../scripts/homerolled/lite.js';

export let view = lite.extend({
    content : `<div id='timeline' class='timeline'></div>`
    , dataLoad : function() {
        import('../../../../5e/notes/timeline.js')
            .then(r => {
                this.setData = r.timeline;
            });
    }
    ,initialize : function() {
        let view = this;
        this.loadStyleSheet('timeline.css');
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
