define([
    'lovesyou_util'
], function (util) {

    let LYTemplate = function (args) {
        let template = this;

        template._container;
        template._content;
        template._content_attached;
        template._content_loading;
        template._content_url;
        template._data;
        template._data_bound;
        template._data_loading;
        template._data_url;

        Object.defineProperties(template, {
            'Container': {
                get : ()=> { return template._container; }
                ,set: function (elem) {
                    template._container = elem;
                    template._content_attached = false;
                    if(template._content_url && !template._content_loading && !template._content){
                        template.ContentUrl = template._content_url;
                    }
                    template._data_bound = false;
                    if(template._data_url && !template._data_loading && !template._data){
                        template.DataUrl = template._data_url;
                    }
                    
                    template._attach_content();
                }
            }
            ,'ContentUrl': {
                set: function (url) {
                    template._content_url = url;
                    template._content_loading = true;
                    if(template.test){ console.log('hai'); }
                    util.xhr({
                        url: url,
                        success: function (data) {
                            template._content_loading = false;
                            template.Content = data;
                        }
                    });
                }
            }
            ,'Content' : { 
                get : ()=>{ return template._content; } 
                ,set : function(value){
                    template._content_attached = false;
                    if(typeof(template._format_content)==='function'){
                        value = template._format_content(value);
                    }
                    template._content = value;
                    template._attach_content();
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
                get : ()=>{ return template._data; }
                ,set : function(data){
                    template._data = data;
                    template._data_bound = false;
                    template._bind_data();
                } 
            }
            ,'DataUrl' : {
                set : function (url) {
                    template._data_url = url;
                    template._data_loading = true;
                    require([url],(val)=>{
                        template._data_loaded = false;
                        template.Data = val;
                    });
                }                
            }
            ,'DataBind' : {
                get : ()=>{ return template._data_bind; }
                ,set : function(val) {
                    template._data_bind = val;
                }
            }
        });

        template._attach_content = function(){
            if(template._container && template._content){
                while(template._container.firstChild){
                    template._container.removeChild(template._container.firstChild);
                }
                template._container.insertAdjacentHTML('afterbegin', template._content);
                template._content_attached = true;
                if(template._content_url) { template._content = null; }
                template._container = null;
                
                template._on_attach();
                template._bind_data();
             }
        }
        template._bind_data = function(){      
            if(!template.data_bound && template._content_attached && template._data){
                template._data_bind();
                template._data_bound = true;
                if(template.data_url) { template._data = null; }
            }
        }

        template._data_bind = ()=>{};
        template._on_attach = ()=>{};
        template._format_content;// = ()=>{};
        
        return template;
    }

    return LYTemplate;
});