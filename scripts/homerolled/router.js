define([
], () => {

    let Router = function (options={}) {
        let _router = this;
        _router.base_url = options.base_url || '';
        _router.start_page = options.start_page || 'index'
        _router.paths = options.paths || {};
        _router.main_content = options.content_holder_id || 'main'
        _router.main_content = document.getElementById(_router.main_content);

        _router.clean_url = function () {
            try {
                //let url = window.location.toString()
                //    .replace('.html', '');
                //window.history.replaceState(null, null, url);
            } catch (e) { /*fails on local browser during dev*/ }
        }
        
        _router.navigate = function () {
            router.clean_url();
            let hash = window.location.hash.slice(1).toLowerCase().split`/`[0]
                || _router.start_page;
            if(!_router.paths[hash]) return; // 404?

            let route = _router.base_url + _router.paths[hash];
            require([route], function (lite) {

                new lite().attach(_router.main_content);
            });            
        }
        window.onhashchange = _router.navigate;
        return _router;
    }
    return Router;
});