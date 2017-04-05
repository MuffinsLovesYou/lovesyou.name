define([
    'lovesyou_util',
    'lovesyou_template'
], function (util, LYTemplate) {


    var template = new LYTemplate();
    template.ContentUrl = 'site/common/modal/modal.html';
    // Modal needs default attach behavior on top of the behavior supplied to it.
    Object.defineProperty(template, "OnAttach", {
        get: function () {
            return template._on_attach;
        },
        set: function (func) {
            let base = func;
            func = function () {
                ((over = document.getElementById('modal-overlay')) => {
                    over.style.backgroundColor = 'rgba(0,0,0,.5)';
                    over.addEventListener('click', (e) => {
                        if (e.target !== over) {
                            return;
                        }
                        template.Container.innerHTML = '';
                    });
                })();
                let content = document.getElementById('modal-content');
                content.style.backgroundColor = document.body.style.backgroundColor;
                content.style.opacity = '1.0';
                base();
            }

            template._on_attach = func;
        }
    });



    return template;
});