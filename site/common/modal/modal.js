import { lite } from '../../../scripts/homerolled/lite.js';

export let Modal = lite.extend({
    content : `<div id='modal-overlay'><div id='modal-content'></div></div>`,
    initialize : function() { 
        this.loadStyleSheet('css/homerolled/modal.css');
        this.cacheOverflowY = document.body.style.overflowY;
    },
    onContentBound : function() {
        this.setOverlay();
        this.styleContent();
    },
    setOverlay : function() {
        let modal = this;
        let overlay = document.getElementById('modal-overlay');
        
        modal.toggleScrolling();
        
        overlay.addEventListener('click', (e) => {
            if(e.target !== overlay) { return e.preventDefault(); }
            modal.toggleScrolling();
            modal.clearContainer();
        });
    },
    clearContainer : function() { 
        let container = document.getElementById('modal-container');
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
    },
    /* While the modal is visible
        Block scrolling on the main page, and hide its scroll bar. */
    toggleScrolling : function() { 
        let overflowY = 
            (document.body.style.overflowY === this.cacheOverflowY)
                ? 'hidden' 
                : this.cacheOverflowY;
        document.body.style.overflowY = overflowY;
    },
    styleContent : function() { 
        let content = document.getElementById('modal-content');
        content.style.backgroundColor = document.body.style.backgroundColor;
        content.style.opacity = '1.0';
    }
});
