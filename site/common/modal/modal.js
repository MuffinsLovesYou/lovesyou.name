define([
    'lovesyou_util',
    'lovesyou_template'
], function (util, LYT) {


    var template = new LYT();
    template.content_url = 'site/common/modal/modal.html';
    template._onContentBound = ()=>{};
    Object.defineProperty(template, 'onContentBound', {
        get : function(){
            return this._onContentBound;
        },
        set : function(func) {
                var _this = this;
                _this._onContentBound = function(){
                let over = document.getElementById('modal-overlay');
                over.style.backgroundColor = 'rgba(0,0,0,.5)';
                over.addEventListener('click', (e) => {
                    if (e.target !== over)
                        return;
                    while(_this.container.firstChild){
                        _this.container.removeChild(_this.container.firstChild);
                    }
                });
                let content = document.getElementById('modal-content');
                content.style.backgroundColor = document.body.style.backgroundColor;
                content.style.opacity = '1.0';
                func();
            }
        }
    });

    return template;
});