define([], function () {
    /*
        Sequenced Events Queue (aaaaalpha version)
        JS promises syntax feels clunky enough that I rarely want to use it. This does functional-style 
        promises on XMLHttpRequest objects by attaching completion riders to their onreadystatechange 
        events and hitting a callback when it is all done. 
    
        Usage example: 
        seq.do(xhr.get('scripts/homerolled/foo.js'))
            .and(xhr.get('scripts/homerolled/bar.js'))
            .then((foo,bar)=> { console.log(foo, bar); }); 
        
    */
    let Seq = function () {
        let seq = this;

        seq._working = 0;
        
        seq._order = [];
        seq._results = {
            add(k, v) {
                seq._results[k] = v;
                seq._working--;
                seq._resolve();
            }
        };
        seq._get_results = function () {
            let res = [];
            for (var o in seq._order)
                res.push(seq._results[seq._order[o]]);
            return res;
        }
        seq._callback = function (x) {}
        seq._resolve = function () {
            if (seq._working === 0)
                seq._callback.apply(seq, seq._get_results());
        }
        seq.do = function (xhr) {
            seq._working++;
            let id = seq._order.length;
            seq._order.push(id);
            if(!xhr) {
                seq._results.add(id, undefined);
            }   
            if (xhr instanceof XMLHttpRequest) {
                
                if (xhr.status === 200) 
                    seq._results.add(id, xhr.responseText);
                else {
                    let cache = xhr.onreadystatechange.bind(xhr);;
                    xhr.onreadystatechange = () => {
                        cache();
                        if (+xhr.readyState === 4 && +xhr.status === 200) { 
                            seq._results.add(id, xhr.response);
                        }
                    }
                }
            }
            if(xhr instanceof Promise){
                xhr.then((res)=>{ seq._results.add(id, res); });
            }
            return {
                and: function (xhr) {
                    return seq.do(xhr);
                },
                then: function (func) {
                    seq._callback = func;
                    seq._resolve();
                    return seq;
                },
                thenDo : function(xhr){
                    
                }
            }
        }
    }

    return Seq;
});