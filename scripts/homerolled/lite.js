define([
    'xhr'
    ,'please'
], function (xhr, please) {
    // for now: stripping out data loading
    // but loading from a single data source is a nice tool

    let Lite = function(args={}){
        let _lite = this;

        _lite.container = args.container || '';
        _lite.content = args.content || '<div>no content</div>';
        _lite.content_url = args.content_url || '';

        //_lite.initialize = ()=>{}
        _lite.onContentLoaded = args.onContentLoaded || ((c)=>{});
        _lite.onContentBound = args.onContentBound || ((c)=>{});
        
        _lite.attach = function(container) {
            if(container) _lite.container = container;
            please.do(_loadContent())
                .then((x)=>{
                    _bindContent();
                });
        }
        _lite.extend = function(args){
            return function() { Lite.call(this, args) }
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
    }

    return new Lite();
/*

    let Lite = function (args) {
        let template = this;

        // data members
        template.container;
        template.content;
        template.content_url;
        template.data;
        template.data_url;
        // overridable functions
        template.initialize = ()=>{}
        template.onDataLoaded = ()=>{}
        template.onDataBound = ()=>{}
        template.onContentLoaded = ()=>{}
        template.onContentBound = ()=>{}
        template.content_formatter = ()=>{};

        template.new = function(){
            var _this = this;
            let n = _this._initialize();
            n.initialize();
            return n;
        }
        template.attach = function(char){
            var _this = this;
            please.do(_this._loadContent())
                .and(_this._loadData())
                .then((x,y)=>{
                    _this.onContentLoaded();
                    _this.onDataLoaded();
                    _this._bindContent();
                    _this._bindData();
                });
        }
        
        template._initialize = function() {
            var _this = this;
            let clone = {};
            let descriptors = Object.keys(_this).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(_this, key);
                return descriptors;
            }, {});
            Object.getOwnPropertySymbols(_this).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(_this, sym);
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor;
                }
            });
            Object.defineProperties(clone, descriptors);
            return clone;
        }

        template._loadData = function(){
            let _this = this;
            if(_this.data_url){
                if(_this.data_url.slice(-3)==='.js'){
                    var req = new Promise((s,f)=>{ 
                        require([_this.data_url], (data)=>{
                            _this.data = data;
                            s(data);
                        });
                    });
                    return req;
                }
                let get = xhr.get(_this._data_url, (data)=>{
                    _this._data = data;
                }, { responseType : 'json' });
                return get;
            } 
        }

        template._loadContent = function() { 
            let _this = this;
            if(_this.content_url){
                let get = xhr.get(_this.content_url, (data)=>{
                    _this.content = data;
                    _this.content_formatter(data);
                });
                return get;
            }
        }

        template._bindContent = function(){
            let _this = this;
            if(_this.container && _this.content){
                while(_this.container.firstChild){
                    _this.container.removeChild(_this.container.firstChild);
                }
                _this.container.insertAdjacentHTML('afterbegin', _this.content);
                _this.onContentBound();
             }
        }
        template._bindData = function(){  
            let _this = this;
            if(_this.data){
                _this.onDataBound();
            }
        }

        return template;
    }

    return Lite;*/
});