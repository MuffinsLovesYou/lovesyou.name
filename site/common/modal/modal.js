define([
    'lite'
], function (lite) {

    return lite.extend({
        content_url : 'site/common/modal/modal.html',
        container : document.getElementById('modal-container'),
        onContentBound : function() {
            let modal = this;
            let base_overflow = document.body.style.overflowY
            document.body.style.overflowY = 'hidden';
            let over = document.getElementById('modal-overlay');
            over.style.backgroundColor = 'rgba(0,0,0,.5)';
            over.addEventListener('onscroll', (e) => {
                e.stopPropagation();
            });
            over.addEventListener('click', (e) => {
                if (e.target !== over)
                    return;
                document.body.style.overflowY = base_overflow;
                while(modal.container.firstChild){
                    modal.container.removeChild(modal.container.firstChild);
                }
            });
            let content = document.getElementById('modal-content');
            content.style.backgroundColor = document.body.style.backgroundColor;
            content.style.opacity = '1.0';
        }

    });
});