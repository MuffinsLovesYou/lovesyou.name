define([
    'lite'
    ,'scripts/homerolled/gridify'
    , '5e/items'
], (lite, gridify, items)=>{

    return lite.extend({
        content : `<div id='items-table'></div>`
        , onContentBound : function(){
            let view = this;
            view.items_table();
        }
        , items_table : function(){
            let view = this;
            let grid = gridify('items-table')
            grid.initialize({
                data : items,
                columns : [
                    { field : 'Name', filter : true, sort : true }
                    , { field : 'Weight', filter : true, sort : true }
                    , { field : 'Value', filter : true, sort : { compare : view.value_sort, parse : view.parse_gp_value  } }
                ]
            });
        }
        , parse_gp_value : function(v){
            let value = +v.replace(/[^\d\.]/g, '');
            if(/cp/.test(v)) value = value * .001;
            else if (/sp/.test(v)) value = value * .1;
            else if (/ep/.test(v)) value = value * .5;
            else if (/pp/.test(v)) value = value * 10;
            return +value || -1;
        }
        , value_sort : function(va, vb, options){
            if(options.parse){
                va = options.parse(va);
                vb = options.parse(vb);
            }
            
            if(va == vb) return 0;
            else return va > vb ? 1 : -1;
        }
    });

});