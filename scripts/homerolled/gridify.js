define([],()=>{


    let gridify_model = function(container){
        let grid = this;
        grid.container = container;

        /* Designed to be run once. 
            Performs initial drawing and definitions. 
        */
        grid.initialize = function(options){
            _clear(grid.container);
            let table = grid.container.appendChild(document.createElement('table'));
            table.id = container.id+'_table';
            let thead = table.createTHead();
            grid.body.initialize();
            if(options.columns) grid.columns.set(options.columns);
            if(options.data) grid.data.set(options.data);
        }

        grid.data = {
            get : function() {
                /* builds data table from existing grid rows */
            },
            set : function(input_data) {
                let data = [];
                if(Array.isArray(input_data)) data = input_data;
                else if(typeof(input_data)==='object')
                    for(let k in input_data) data.push(input_data[k]);

                data.forEach((row_data, ridx)=>{
                    grid.body.add_row(row_data, ridx);
                });
            }
            , get_fields : function() {
                return _header_cells().map(x => x.id.split('_').slice(-1));
            }
        }
        let _clear = (container)=> { if(!container) return; while(container.firstChild) container.removeChild(container.firstChild); }
        let _table = () => grid.container.firstChild;
        let _header_cells = () => Array.from(_table().tHead.rows[0].cells);
        let _filter_cells = () => Array.from(_table().tHead.rows[1].cells);
        let _table_rows = () => Array.from(_table().tBodies[0].rows);


        grid.columns = {
            set : function(column_definitions) {
                if(!Array.isArray(column_definitions)) 
                    throw`.columns.set requires array of column definitions`;

                _clear(_table().tHead);
                grid.body.initialize();
                _table().tHead.insertRow();
                _table().tHead.insertRow();
                column_definitions.forEach(col => {
                    grid.columns.add(col);
                });

                return grid; 
            }
            , add : function(column_definition){
                let hrow = _table().tHead.rows[0];
                let header_cell = hrow.insertCell();
                let frow = _table().tHead.rows[1];
                let filter_cell = frow.insertCell();
                header_cell.id = _table().id+'_header_'+column_definition.field;
                grid.columns._set_header_label(header_cell, column_definition);
                grid.columns._set_header_style(header_cell, column_definition);
                grid.columns._set_column_sort(header_cell, column_definition);
                grid.columns._set_column_filter(filter_cell, column_definition);
                
                grid.body.seed_row.add_column(column_definition);
                return grid;
            }
            , _set_header_label : function(header_cell, column_definition) {
                let label = header_cell.appendChild(document.createElement('span'));
                label.innerHTML = column_definition.header || column_definition.field;
            }
            , _set_header_style : function(header_cell, column_definition) {
                grid.styling.stylize_header_cell(header_cell, column_definition);
            }
            , _set_column_sort : function(header_cell, column_definition) {
                if(!column_definition.sort) return;
                let sort_icon = header_cell.appendChild(document.createElement('span'));
                sort_icon.className = 'sort'
                header_cell.style.paddingRight = '30px';
                header_cell.addEventListener('click', grid.sorting.sort_callback(column_definition.field, column_definition.sort));
            }
            , _set_column_filter : function(filter_cell, column_definition) {
                if(!column_definition.filter) return;
                filter_cell.id = _table().id+'_filter_columns_'+column_definition.field;
                grid.filtering.add_filter(filter_cell, column_definition)
            } 
        }

        grid.body = {
            initialize : function(table=_table()) {
                while(table.tBodies[0]) table.removeChild(table.tBodies[0])
                let tbody = table.createTBody();
                let seed = table.createTBody();
                let seed_row = seed.insertRow();
                seed_row.id = _table().id+'_seed'
                seed_row.style.display = 'none';
            }
            , _set_body_cell : function(body_cell, value, column_definition) {
                let label = body_cell.appendChild(document.createElement('span'));
                label.innerHTML = value;
            }
            , add_row : function(row_data, rowid) {
                let row = grid.body.seed_row.clone();
                row.id = _table().id+'_'+rowid;
                _table().tBodies[0].appendChild(row);
                Array.from(row.cells).forEach((cell)=>{
                    let field = cell.id.split('_').slice(-1);
                    cell.id = row.id + '_' + field;
                    cell.innerHTML = row_data[field];
                });
            }
            , seed_row : {
                clone : function() {
                    let seed = Array.from(_table().tBodies[1].rows).slice(-1)[0];
                    let row = seed.cloneNode(true);
                    row.style. display = '';
                    Array.from(seed.cells).forEach((scell, cidx)=>{
                        let cell = row.cells[cidx];
                        cell.addEventListener('click', scell.onclick);
                    });
                    return row;       
                }
                , add_column(column_definition){
                    let tr = _table().tBodies[1].rows[0];
                    let td = tr.insertCell();
                    td.id = tr.id+'_'+column_definition.field;
                    td.innerHTML = 'test';
                    grid.styling.stylize_body_cell(td, column_definition);
                    if(column_definition.click)
                        td.onclick = column_definition.click;
                }
            }

        }

        grid.styling = {
            defaults : { 
                tbody : {
                    tr : `` // border bottom
                    , td : `border-bottom:solid thin;padding:.08rem .25rem;overflow:hidden;text-align:left;text-overflow:ellipses;white-space:nowrap`
                }
                , thead : {
                    tr : ``
                    , td : `font-weight:bold; text-align:center; padding:4px 16px 4px 16px;` 
                }
            }

            , stylize : function(el, style) {
                (style||'').split(';')
                    .map(x => x.trim().split(':'))
                    .forEach(kv => el.style[kv[0]]=kv[1]);
            }
            , stylize_header_cell : function(td, col) {
                grid.styling.stylize(td, grid.styling.defaults.thead.td);
                // 'all columns' options
                grid.styling.stylize(td, col.header_style);
            }
            , stylize_body_cell: function(td, col) {
                grid.styling.stylize(td, grid.styling.defaults.tbody.td);
                // all cols 
                grid.styling.stylize(td, col.style);
            }
        }

        let get_cell_value = function(row, property){ 
            if(typeof(row)==='number') row = _table().tBodies[0].rows[row];
            let cells = Array.from(row.cells);
            let cell = cells.find(x=>x.id.split('_').slice(-1)==property);
            return cell.innerText;
        }

        // we might try and consider making the sorting stable at some point. 
        grid.sorting = {
            sort : function(property_name, rule) {
                if(typeof(rule) !== 'function') rule = grid.sorting.default_sort_rule;
                let asc = grid.sorting.column_sort_direction(property_name);
                
                let rows = _table_rows();
                rows.sort((x,y)=>{
                    let xv = get_cell_value(x, property_name);
                    let yv = get_cell_value(y, property_name);
                    let compared = rule(xv, yv);
                    return +compared * asc;
                });
                let tbody = _table().tBodies[0];
                _clear(tbody);
                rows.forEach(x=>tbody.appendChild(x));
            }
            , sort_callback : function(property_name, rule){
                return ()=>{ grid.sorting.sort(property_name, rule); }
            }
            , default_sort_rule : function(a, b){
                if(a===b) return 0;
                return a<b ? -1 : 1;
            }
            , column_sort_direction : function(property_name) {
                let rows = _table_rows();
                let v1 = get_cell_value(rows[0], property_name);
                let v2 = get_cell_value(rows[rows.length-1], property_name);
                return v1 < v2 ? -1 : 1;
            }
            
        }


        let filter_pending = 0;
        let filter_delay = function(callback) {
            return function(field_value, filter_value) {
                clearTimeout(filter_pending);
                filter_pending = setTimeout(()=>{ callback(field_value, filter_value); }, 150);
            }
        }
        grid.filtering = { 
            add_filter : function(filter_cell, column_definition) {
                let rule = column_definition.filter == true ? grid.filtering._default_filter_rule : column_definition.filter;
                let control = column_definition.filter_control || grid.filtering._default_filter_control(column_definition.field);

                control.rule = rule;
                control.property = column_definition.field;
                control.addEventListener('keyup', filter_delay(grid.filtering.filter_callback));  
                filter_cell.appendChild(control);
            }
            , _default_filter_rule : function(x, y){ 
                return (''+x).toLowerCase().substr(0, y.length) == y.toLowerCase();
            }
            , _default_filter_control : function(property_name){
                let control = document.createElement('input');
                control.type = 'text';
                control.id = _table().id + '_filter_' + property_name;
                control.style.width = '80%';
                control.style.display = 'block';
                control.style.margin = 'auto';
                return control;
            }
            , filter_callback : function() {
                let filter_controls = _filter_cells()
                    .map((cell) => { return cell.firstChild; })
                    .filter(x => !!x);
                _table_rows().forEach((row)=>{
                    let filtered_out = filter_controls.some((filter_control)=>{
                        return !filter_control.rule(get_cell_value(row, filter_control.property), filter_control.value)
                    });
                    row.style.display = filtered_out ? 'none' : ''
                });
            }
        }
        return grid;
    }


    let gridify = function(el) {
        if(typeof(el)==='string') el = document.getElementById(el);
        if(!el instanceof HTMLDivElement) 
            throw('Gridify target must be <div>');
        
        return new gridify_model(el);
    }
    return gridify;

});