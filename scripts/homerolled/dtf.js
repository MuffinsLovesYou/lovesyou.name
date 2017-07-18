define([], function () {
    /*
        do this first (alpha 0.2.0)
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
        let dtf = this;

        dtf._handlers = {}
        dtf.addHandler = function (type, comparer, resolver) {
            dtf._handlers[type] = {
                compare: comparer,
                resolve: resolver
            }
        }

        let tasklist = function () {
            this.id = 1; // number of requests
            this.active = 1; // unresolved requests
            this.results = []; // results/responses
            this.callback = () => {}; // final callback
            this.result = (id, v) => {
                this.active--; // decrement unresolved
                this.result[id - 1] = v; // add result
                this.resolve();
            };
            this.resolve = () => { // if none active callback(results)
                if (!this.active) this.callback.apply(this, this.results);
            }
            return this;
        }

        dtf.do = function (req) {
            let tl = this instanceof tasklist ? this : new tasklist();

            for (h in dtf._handlers) 
                if (dtf._handlers[h].compare(req)) {
                    dtf._handlers[h].resolve(tl, req, tl.id);
                    break;
                }

            return {
                and: (req) => {
                    tl.id++;
                    tl.active++;
                    return dtf.do.bind(tl)(req);
                },
                then: (func) => {
                    tl.callback = func;
                    tl.resolve();
                    return dtf;
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