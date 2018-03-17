define([],()=>{

    // big ol work in progress, gotta clean it up a lot. 
    // The name does not mean anything.  
    // It is eGrid backwards, but that still means nothing. 
    let Dirge = function(options={}){
        let grid = this;
        
        grid.container = options.container;// html container
        options.data = JSON.parse(JSON.stringify(options.data)); // clear references 
        grid.columns = options.columns; // array of column options/definitions 

        grid.base_data = [];
        if(Array.isArray(options.data)) grid.base_data = options.data;
        else if(typeof(options.data)==='object') 
            for(let k in options.data) grid.base_data.push(options.data[k]);
        grid.data = JSON.parse(JSON.stringify(grid.base_data));

        grid.all_col = options.all_col || {}; // style for every column,        
        grid.style = {
            td_default : 'text-align:center; padding: .04rem .05rem; border-bottom:solid thin',// bit hacky right now.
            th_default : 'font-weight:bold; text-align:center; padding:4px 16px 4px 16px;',

            stylize : function(el, style){
                (style||'').split(';')
                    .map(x=>x.trim().split(':'))
                    .forEach(kv=>el.style[kv[0]]=kv[1])
            }
        }

        grid.sorting = {
            default_sort : function(){

            },
            col_sort : function(property, sort){
                let e = ()=>{ 
                    let v1 = grid.data[0][property];
                    let v2 = grid.data[grid.data.length-1][property];
                    let asc = v1 < v2;
                    grid.data.sort((x,y)=>{
                        let xv = x[property];
                        let yv = y[property];
                        return xv<=yv ? asc : !asc;
                    });
                    grid.draw();
                }
                return e;
            } 
        }

        grid.rendering = {
            build : function(){
                grid.rendering.clear();
                let table = grid.table = grid.container.appendChild(document.createElement('table'));
                table.id = grid.container.id + '_table';
                grid.rendering.build_thead(table);
                grid.rendering.build_tbody(table);
                let tf = table.createTFoot();
            }
            , clear : function(){
                while(grid.container.firstChild)
                    grid.container.removeChild(grid.container.firstChild);
            }
            , build_thead : function(table) {
                let hrow = table.createTHead().insertRow(0);
                grid.columns.forEach((c, i)=>{
                    let hcell = hrow.insertCell(i);
                    let span = hcell.appendChild(document.createElement('span'));
                    span.innerHTML = c.header || c.field;
                
                    grid.style.stylize(hcell, grid.style.th_default);
                    //grid.style.stylize(hc, all_col.hstyle);
                    grid.style.stylize(hcell, c.hstyle);
                
                    if(c.sort){
                        let s = span.appendChild(document.createElement('span'))
                        s.className = 'sort';
                        hcell.style.paddingRight = '30px';
                        hcell.addEventListener('click', grid.sorting.col_sort(c.field, c.sort));
                    }
                });
            }
            , build_tbody : function(table){
                let tb = table.createTBody();
                grid.data.forEach((row,r)=>{
                    let tr = tb.insertRow(r);
                    tr.id = table.id+'_row'+r;
                    grid.columns.forEach((col,c)=>{
                        let td = tr.insertCell(c);
                        td.id = tr.id + '_cell'+c;
                        let crval = row[col.field];
                    
                        if(col.format) crval = col.format(crval);
                        td.innerHTML = crval;
                        
                        grid.style.stylize(td, grid.style.td_defaults);
                        //if(grid.all_col.style) set_style(td, lylt.all_col.style);
                        grid.style.stylize(td, col.style);
                        
                        if(col.click) td.addEventListener('click', col.click);
                    });
                });
            }
        }
        grid.draw = grid.rendering.build;
        
        let _filters = {}
        // current methodology: 
        // keep the original data source, 
        // clone it, filter it, redraw based on that. 
        // aternative method: 
        // go through rows, apply filters to them, hide/show rows 
        grid.filters = {
            add : function(field, filter, options) {
                if(typeof(filter)!=='function'){
                    let val = filter;
                    filter = (item)=>{
                        if(typeof(item)!=='object'|| !item.hasOwnProperty(field))
                            return false;
                        return item[field] == val;
                    }
                }
                _filters[field] = filter;
                grid.filters.apply();
            }
            ,remove : function(name){
                delete _filters[name];
                grid.filters.apply();
            }
            , apply : function() {
                grid.data = JSON.parse(JSON.stringify(grid.base_data));
                grid.data = grid.data.filter((item)=>{
                    for(let f in _filters)
                        if(!_filters[f](item)) return false;
                    return true;
                });
                grid.draw();
            }
        }
        return this;
    } 


    return Dirge;
});