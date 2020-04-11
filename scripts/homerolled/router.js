define([], () => {

    let Router = function (options={}) {
        let _router = this;
        _router.paths = [];

        _router.onHashChange = function() { 
            throw('router.onHashChange not set');
        }
        _router.onHashChange = options.onHashChange;

        _router._onHashChange = function() {
            let hash = location.hash || '#';
            let path = _router.paths.find(path => {
                return path.pattern.test(hash);
            });
            _router.onHashChange(hash, path.value);
        }
        window.onhashchange = _router._onHashChange;

        _router.addPath = function(hash, value) {
            if(hash instanceof RegExp) { 
                _router.paths.push({ pattern : hash, value : value });
            }
            if(typeof(hash) !== 'string') { return; }

            hash = hash.replace(/{.+}/, '.+');
            hash = hash.replace('/', '\/');
            /* hash to match #location/hash
                with ?optional=true&parameters=1*/
            let pattern = new RegExp('^\#' + hash + '(\\?.*)?$');
            
            _router.paths.push({ pattern : pattern, value : value });
            return _router.paths;
        }

        _router.addPaths = function(paths) { 
            for(let p in paths) {
                _router.addPath(p, paths[p]);
            }
            return _router.paths;
        }

        if(options.paths) {
            _router.addPaths(options.paths);
        }

        return _router;
    }

    return Router;
});