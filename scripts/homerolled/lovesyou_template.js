define([
    'lovesyou_util'
], function (util) {
    console.log('loading lovesyou_template');

    let Get = function(obj,private){
        return ()=>{ return obj[private]; }
    }
    let Set = function(obj,private){
        return (val) => { obj[private] = val; }
    }

    let LYTemplate = function (args) {
        let template = this;

        template._container;
        template._content;
        template._content_loaded;
        template._data;

        Object.defineProperties(template, {
            'Container': {
                get : new Get(template, '_container')
                ,set: function (elem) {
                    template._container = elem;
                    template._fill_container();
                }
            }
            ,'ContentUrl': {
                set: function (url) {
                    util.xhr({
                        url: url,
                        success: function (data) {
                            template.Content = data;
                        }
                    });
                }
            }
            ,'Content' : { 
                get : new Get(template, '_content')
                ,set : function(value){
                    if(typeof(template._format_content)==='function'){
                        value = template._format_content(value);
                    }
                    template._content = value;
                    template._fill_container();
                }
             }
            ,'ContentFormat' :{
                set : function(func){
                    template._format_content = func;
                    if(template._content) {
                        template._content = template._format_content(template._content);
                    }
                }
            }
            ,'OnAttach' : {
                set : function(func){
                    template._on_attach = func;
                }
                ,get : function() {
                    return template._on_attach;
                }
                ,configurable : true
            }
            ,'Data' : {
                get : new Get(template, '_data')
                ,set : function(data){
                    template._data = data;
                    template._bind_data();
                } 
            }
            ,'DataUrl' : {
                set : function (url) {
                    require([url],(val)=>{
                        template.Data = val;
                    });
                }                
            }
            ,'DataBind' : {
                get : new Get(template, '_data_bind')
                ,set : function(val) {
                    template._data_bind = val;
                }
            }
        });

        template._fill_container = function(){
            if(template._container && template._content){
                template._container.innerHTML = '';
                template._container.insertAdjacentHTML('afterbegin', template._content);
                template._on_attach();
                template._bind_data();
                template._data_bound = false;
                
             }
        }
        template._bind_data = function(){
            if(template._content && template._data && !template._data_bound){
                template._data_bind();
                template._data_bound = true;
            }
        }

        template._data_bind = ()=>{};
        template._on_attach = ()=>{};
        template._format_content;// = ()=>{};
        
        return template;
    }


    return LYTemplate;


});