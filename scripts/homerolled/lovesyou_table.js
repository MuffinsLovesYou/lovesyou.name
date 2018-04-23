define([],()=>{

    // table 
    // grid 
    // matrix 

    // small
    // lightweight 
    // 

    

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

        /*
        Needs improved default stylings. 
        Needs stylings for tables, rows, and columns 
        Needs better 'all column' styling option. 
        */
        grid.all_col = options.all_col || {}; // style for every column,        
        grid.style = {
            td_default : 'text-align:center; padding: .04rem .05rem; border-bottom:solid thin',// bit hacky right now.
            th_default : 'font-weight:bold; text-align:center; padding:4px 16px 4px 16px;',
            
            stylize : function(el, style){
                (style||'').split(';')
                    .map(x=>x.trim().split(':'))
                    .forEach(kv=>el.style[kv[0]]=kv[1])
            }
            , stylize_header_cell : function(header_cell, column_def){
                grid.style.stylize(header_cell, grid.style.th_default);
                //grid.style.stylize(hc, all_col.hstyle);
                grid.style.stylize(header_cell, column_def.hstyle);          
            }
        }

        /*
        Need ability to provide override sort function for columns. 
        */
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
                grid.rendering.add_header_labels(table);
                grid.rendering.set_header_styles(table);
                grid.rendering.set_sortable_columns(table);
                grid.rendering.set_filterable_columns(table);
                //let hrow = table.createTHead().insertRow(0);
                //grid.columns.forEach((c, i)=>{
                //    let hcell = hrow.insertCell(i);
                //    let span = hcell.appendChild(document.createElement('span'));
                //    span.innerHTML = c.header || c.field;
                
                   // grid.style.stylize_header_cell(hcell, c);
                    
                  //  if(c.sort) 
                 //       grid.rendering.make_sortable(c, hcell, span);
                    //if(c.filter)

                //});
            }
            , add_header_labels : function(table) {
                let header_row = table.createTHead().insertRow(0);
                grid.columns.forEach((col, cidx)=>{
                    let header_cell = header_row.insertCell(cidx);
                    let label = header_cell.appendChild(document.createElement('span'));
                    label.innerHTML = col.header || col.field;             
               });
            }
            , set_header_styles : function(table){
                let header_row = table.tHead.rows[0].cells;
                grid.columns.forEach((col, cidx)=>{
                    grid.style.stylize_header_cell(header_row[cidx], col);
                });
            }
            , set_sortable_columns : function(table){
                let header_row = table.tHead.rows[0].cells;
                grid.columns.forEach((col, cidx)=>{
                    if(!col.sort) return;
                    let sort_icon = header_row[cidx].firstChild.appendChild(document.createElement('span'));
                    sort_icon.className = 'sort';
                    header_row[cidx].style.paddingRight = '30px';
                    header_row[cidx].addEventListener('click', grid.sorting.col_sort(col.field, col.sort));
                });
            }
            , set_filterable_columns : function(table){
                if(!grid.columns.some(c=>c.filter)) return;
                window.table = table;
                let filter_row = table.tHead.insertRow(1);
                grid.columns.forEach((col, cidx)=>{
                    let filter_cell = filter_row.insertCell(cidx);
                    if(!col.filter) return;
                    let filter_box = filter_cell.appendChild(document.createElement('input'));
                    // default behavior : textbox with wildcard search 
                    filter_box.type = 'text';
                    filter_box.style = 'width:90%; margins:auto;'
                    filter_box.addEventListener('keyup', (e)=>{
                        let val = filter_box.value;
                        val ? grid.filters.add(col.field, (item)=>{
                            return (''+item[col.field]).includes(val);
                        }) : grid.filters.remove(col.field);
                    });
                });
                console.log('hai')
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
        
        /*
        Need to establish default filter functionality with wildcard text input search as 
        part of column header. 
        Ability to provide overrides with custom controls in header row to perform alternate searches 
        */

        // so default behavior: 
        // if filter : true on a column 
        // need a second header row (is that legit?)

        /*
        Need to consider alternative method where filtered-out rows are hidden 
            rather than working with a cloned and filtered dataset. this would 
            allow for the possibility of a less stateful grid if that is desirable.
        When we start filtering monsters, might need to tweak performance. 
        */
        let _filters = {}
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