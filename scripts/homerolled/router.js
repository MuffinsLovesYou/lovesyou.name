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
            let hash = window.location.hash.slice(1).toLowerCase()
                || _router.start_page;
            if(!_router.paths[hash]) return; // 404?

            let route = _router.base_url + _router.paths[hash];
            require([route], function (lite) {
                new lite().attach(_router.main_content);
            }); 
            
            _router.onNavigate(hash);
        }

        _router.onNavigate = function(hash) { 
            _router.setBootstrapBreadcrumb(hash);
        }

        _router.setBootstrapBreadcrumb = function(hash) { 
            let breadCrumb = document.getElementById('bootstrap-breadcrumb');
            if(!breadCrumb) { return; }
            while(breadCrumb.children.length > 0) { breadCrumb.removeChild(breadCrumb.firstChild); }

            let createLink = function(text, href, active) {
                let li = document.createElement('li');
                li.className = 'breadcrumb-item';

                let anchor = document.createElement('a');
                anchor.href = href;//'#' + paths.slice(0, i + 1).join('/');
                anchor.innerHTML = text;//(i===0) ? 'home' : p;
                li.appendChild(anchor);

                if(active) {
                    li.className = 'breadcrumb-item active';
                    li.setAttribute('aria-current', 'page');
                }
                return li;
            }

            breadCrumb.appendChild(createLink('home', '#', false));
            if(hash == ["home"]) { return; }

            let paths = hash.split('/');
            paths.forEach((p, i) => {
                let text = p;
                let href = '#' + paths.slice(0, i+1).join('/');
                let active = (i == paths.length-1);
                let li = createLink(text, href, active);

                breadCrumb.appendChild(li);
            });

        }
        window.onhashchange = _router.navigate;
        return _router;
    }
    return Router;
});