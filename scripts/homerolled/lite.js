define([
    'xhr'
    ,'please'
], function (xhr, please) {
    /* Acronym first, meaning of the actual letters second. 
        Let it be called the:
        * Lightweight: right now its like... 100 lines of code
        * Independent:  well... its sort of dependent on xhr and please and require... hmm
        * Templating Engine: what it do  
    */
    let Lite = function(args={}){
        let _lite = this;
        _lite.container = '';
        _lite.content = '<div>no content</div>';
        _lite.content_url = '';
        _lite.data;
        _lite.data_url = ''

        _lite.initialize = ()=>{}
        _lite.onContentLoaded = ((c)=>{});
        _lite.onContentBound = ((c)=>{});
        // data loading makes sense, it loads, it arrives. 
        _lite.onDataLoaded = ((d)=>{});
        // data bound only makes sense if we have additional binding logic 
        _lite.onDataBound = ((d)=>{});
        for(let a in args)
            this[a] = args[a];
        
        let _initialize = function() {
            _lite.initialize();
        }
        _initialize();
        
        _lite.attach = function(container) {
            if(container) _lite.container = container;
            please.do(_loadContent())
                .and(_loadData())
                .then((x, y)=>{
                    _bindContent(x);
                    _bindData(y);
                });
        }
        _lite.extend = function(args){
            return function(more_args) { 
                for(let k in more_args)
                    args[k] = more_args[k];
                Lite.call(this, args);
            }
        }

        let _loadContent = function() { 
            if(_lite.content_url)
                return xhr.get(_lite.content_url, (content)=>{
                    _lite.content = content;
                    _lite.onContentLoaded(content);
                });
            if(!_lite.content) throw`no content or content url for template`;
        }
        let _bindContent = function(){
            if(_lite.container && _lite.content){
                while(_lite.container.firstChild)
                    _lite.container.removeChild(_lite.container.firstChild);
                _lite.container.insertAdjacentHTML('afterbegin', _lite.content);
                _lite.onContentBound();
            }
            else throw`no container or no content for template`
        }
        let _loadData = function() {
            let data_loaded = function(data){
                _lite.onDataLoaded(data);
                return _lite.data = data;
            }
            
            if(_lite.data_url.slice(-3)==='.js') 
                return new Promise((s, f)=>{
                    require([_lite.data_url], (data)=>{ 
                        s(data_loaded(data));
                    });
                });
            
            if(!_lite.data_url && _lite.data) 
                return data_loaded(_lite.data);
            
            if(_lite.data_url) xhr.get(_lite.data_url, (data)=>{ data_loaded(data);});        
        }
       
       let _bindData = function(data) {
            _lite.container.querySelectorAll('[bind]')
                .forEach((el)=>{
                    let prop = el.getAttribute('bind') || el.id;
                    let val = prop.split('.').reduce((acc, p)=>{ return acc[p]; }, data)
                    if(typeof(el.value) !== 'undefined') el.value = val;
                    else el.innerHTML = val;
                });

           _lite.onDataBound(data);
        }
    }

    return new Lite();
});