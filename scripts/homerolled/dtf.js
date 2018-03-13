define([], function () {
    /*
        'do this first' (alpha 0.2.0)
        I don't really care for native Promises syntax enough that I rarely want to use it. This is a 
        functional style wrapper for asynchronous and promise-like events that's more to my tastes. 

        Usage example: 
        dtf.do(xhr.get('scripts/homerolled/foo.js'))
            .and(xhr.get('scripts/homerolled/bar.js'))
            .then((foo,bar)=> { console.log(foo, bar); }); 
        
        todo: 
            add error handling and bubbling.   
    */
    let DTF = function () {
        let _dtf = this;

        _dtf._handlers = {}
        _dtf.addHandler = function (type, comparer, resolver) {
            _dtf._handlers[type] = {
                compare: comparer,
                resolve: resolver
            }
        }

        let TaskList = function () {
            let _tl = this;
            _tl.id = 1; // number of requests
            _tl.active = 1; // unresolved requests
            _tl.results = []; // results/responses
            _tl.callback = () => {}; // final callback
            _tl.result = (id, v) => {
                _tl.active--; // decrement unresolved
                _tl.result[id - 1] = v; // add result
                _tl.resolve();
            };
            _tl.resolve = () => { // if none active callback(results)
                if (!_tl.active) _tl.callback.apply(_tl, _tl.results);
            }
            return _tl;
        }

        _dtf.do = function (req) {
            let tl = this instanceof TaskList ? this : new TaskList();

            for (let h in _dtf._handlers) 
                if (_dtf._handlers[h].compare(req)) {
                    _dtf._handlers[h].resolve(tl, req, tl.id);
                    break;
                }

            return {
                and: (req) => {
                    tl.id++;
                    tl.active++;
                    return _dtf.do.bind(tl)(req);
                },
                then: (func) => {
                    tl.callback = func;
                    tl.resolve();
                    return _dtf;
                }
            }
        }
    }

    let dtf = new DTF();
    dtf.addHandler('null',
        (req) => { return !req; },
        (tl, x, id) => { tl.result(id, undefined); }
    );
    dtf.addHandler('xhr',
        (xhr) => { return xhr instanceof XMLHttpRequest; },
        (tl, xhr, id) => {
            if (xhr.status === 200)
                tl.result(id, xhr.response);
            else {
                let orsc = xhr.onreadystatechange.bind(xhr);
                xhr.onreadystatechange = () => {
                    orsc();
                    if (+xhr.readyState === 4 && +xhr.status === 200)
                        tl.result(id, xhr.response);
                }
            }
        }
    );
    dtf.addHandler('promise',
        (prm) => { return prm instanceof Promise; },
        (tl, prm, id) => { prm.then((res) => { tl.result(id, res); }); }
    );

    return dtf;
});