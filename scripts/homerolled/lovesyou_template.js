define([
    'lovesyou_util'
    ,'xhr'
    ,'seq'
], function (util, xhr, Seq) {

    let LYTemplate = function (args) {
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
            var seq = new Seq();  
            seq.do(_this._loadContent())
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

    return LYTemplate;
});