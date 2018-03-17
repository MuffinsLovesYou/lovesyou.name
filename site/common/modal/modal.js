define([
    'lite'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/common/modal/modal.html',
        container : document.getElementById('modal-container'),
        onContentBound : function() {
            let modal = this;
            let over = document.getElementById('modal-overlay');
            over.style.backgroundColor = 'rgba(0,0,0,.5)';
            over.addEventListener('click', (e) => {
                if (e.target !== over)
                    return;
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