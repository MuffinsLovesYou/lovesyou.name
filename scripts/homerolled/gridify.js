
export let Gridify = function(container){   
    if(typeof(container) === 'string') { 
        container = document.getElementById(container);
    }

    if(!container instanceof HTMLDivElement) {    
        throw('Gridify container must be <div>');
    }

    let grid = this;
    grid.container = container;
    Object.defineProperty(grid, 'table', { get : () => grid.container.firstChild });
    Object.defineProperty(grid, 'options', { get : () => grid.table.options });

    let _clear = (container)=> { 
        if(!container) return; 
        while(container.firstChild) container.removeChild(container.firstChild); 
    }        

    /* Initializes grid within provided container. */
    grid.initialize = function(options){
        _clear(grid.container);
        grid.container
            .appendChild(document.createElement('table'))
            .id = grid.container.id +'_table';
        
        grid.styling.stylizeGrid(grid.table, options)
            
        
        grid.header.initialize(options);
        grid.body.initialize();
        grid.footer.initialize();
        
        if(typeof(options.columns) === 'object') grid.header.addColumns(options.columns);
        if(typeof(options.data) === 'object') grid.data.set(options.data);
        
        grid.table.options = options;
        grid.onInitialized(options);
    }
    grid.onInitialized = function(options){}

    grid.data = {
        get : function() {
            return grid.body.rows.map(r => grid.data.getRowValues(r));
        }
        , set : function(data) {
            grid.body.clear();
            data.forEach((rowData, ridx) => {
                grid.body.addRow(rowData, ridx);
            });
        }
        , getRowValues : function(row){
            let rowValues = {};
            Array.from(row.cells).forEach(c => {
                rowValues[c.id.split('_').pop()] = c.innerText;
            });
            return rowValues;
        }
        , getCellValue : function(row, property){
            if(typeof(row) === 'number') { row = grid.body.rows[row]; }
            return Array.from(row.cells)
                .find(x => x.id.split('_').slice(-1) == property)
                .innerText;
        }
    }

    grid.header = {
        initialize : function(options){
            let tHead = grid.table.createTHead();
            tHead.insertRow(); // Label 
            grid.header.onInitialized(options);
        }
        , onInitialized : function(options){}
        //, cells : defined using object.defineProperty below
        , findCell : function(property) { 
            return grid.header.cells.find(c => c.id.split('-').pop() === property); 
        }
        , addColumns : function(colDefs){
            if(!Array.isArray(colDefs)) 
                throw`.columns.set requires an array of column definitions`;

            colDefs.forEach(col => {
                grid.header.addColumn(col);
            });
        }
        , addColumn : function(colDef) {
            let th = document.createElement('th');
            th.id = grid.table.id + '-header-' + colDef.field;
            grid.table.tHead.rows[0].appendChild(th);

            grid.header._setHeaderLabel(th, colDef);
            grid.header._setHeaderStyle(th, colDef);
            
            grid.header.onColumnAdded(th, colDef);
            grid.body.seedRow.addColumn(colDef);
        }
        , onColumnAdded : function(headerCell, colDef){ 
            // used by extensions to further modify and add functionality to columns.
        }     
        , _setHeaderLabel : function(headerCell, colDef) {
            let label = headerCell.appendChild(document.createElement('span'));
            label.innerHTML = colDef.header || colDef.field;
        }
        , _setHeaderStyle : function(headerCell, colDef) {
            grid.styling.stylizeHeaderCell(headerCell, colDef);
        }
    }
    Object.defineProperty(grid.header, 'cells', { get : () => Array.from(grid.table.tHead.rows[0].cells) });

    grid.body = {
        initialize : function(table = grid.table) {
            let main_body = table.createTBody();
            grid.body.seedRow.initialize();
        }
        , clear : function(){ _clear(grid.table.tBodies[0]); }
        //, rows : defined as property below
        , _setBodyCell : function(bodyCell, value, colDef) {
            let label = bodyCell.appendChild(document.createElement('span'));
            label.innerHTML = value;
        }
        , addRow : function(rowData, rowid) {
            let row = grid.body.seedRow.clone();
            row.id = grid.table.id + '_' + rowid;
            grid.table.tBodies[0].appendChild(row);
            Array.from(row.cells).forEach((cell)=>{
                let field = cell.id.split('_').slice(-1);
                cell.id = row.id + '_' + field;
                cell.innerHTML = rowData[field];
            });
        }
        , seedRow : {
            initialize : function(){
                let seed_body = grid.table.createTBody();
                let seedRow = seed_body.insertRow();
                seedRow.id = grid.table.id + '_seed';
                seedRow.style.display = 'none';
            }
            , clone : function() {
                let seed = grid.table.tBodies[1].rows[0];
                let row = seed.cloneNode(true);
                row.style. display = '';
                Array.from(seed.cells).forEach((scell, cidx)=>{
                    let cell = row.cells[cidx];
                    cell.addEventListener('click', scell.onclick);
                });
                return row;       
            }
            , addColumn(colDef){
                let tr = grid.table.tBodies[1].rows[0];
                let td = tr.insertCell();
                td.id = tr.id + '_' + colDef.field;
                td.innerHTML = 'test';
                
                grid.styling.stylizeTableCell(td, colDef);
                if(colDef.click)
                    td.onclick = colDef.click;
            }
        }
    }
    Object.defineProperty(grid.body, 'rows', { get : () => Array.from(grid.table.tBodies[0].rows) });

    grid.footer = {
        initialize : function() {
            grid.table.createTFoot();
        }
    }

    grid.styling = {
        defaults : { 
            grid : `border-collapse:collapse`,
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
        , stylizeGrid : function(table, options){
            grid.styling.stylize(table, grid.styling.defaults.grid);
            if(options.class) { table.className = options.class; }
            if(options.style) { grid.styling.stylize(table, options.style); }
        }
        // columns : [ { header : { style : 'xyz' } }]
        , stylizeHeaderCell : function(td, col) {
            grid.styling.stylize(td, grid.styling.defaults.thead.td);
            if(col.header && col.header.class) { td.className = col.header.class; }
            if(col.header && col.header.style) { grid.styling.stylize(td, col.header.style); }
        }
        // columns : [ { style : 'xyz' }]
        , stylizeTableCell: function(td, col) {
            grid.styling.stylize(td, grid.styling.defaults.tbody.td);
            if(col.class) { td.className = col.class; }
            grid.styling.stylize(td, col.style);
        }
    }

    for(var k in grid.extensions)
        grid.extensions[k].apply(grid, arguments);
    
    return grid;
}
Gridify.prototype.extensions = {};



Gridify.prototype.extensions.sorting = function(){
    let grid = this;

    let onColumnAdded = grid.header.onColumnAdded;
    grid.header.onColumnAdded = function(headerCell, columnDefinition){
        onColumnAdded(headerCell, columnDefinition);
        if(!columnDefinition.sort) { return; }

        grid.sorting._addSortIcon(headerCell);
        let sortCallback = grid.sorting._getSortCallback(columnDefinition.field, columnDefinition.sort);
        headerCell.addEventListener('click', sortCallback);
    }
    grid.sorting = {
        sort : function(property, options) {
            options = grid.sorting._getSortOptions(property, options);
            
            let rows = grid.body.rows;
            rows.sort((x,y) => {
                let xv = grid.data.getCellValue(x, property);
                let yv = grid.data.getCellValue(y, property);
                let compared = options.comparator(xv, yv);
                return +compared * options.direction;
            });
            
            grid.sorting._redrawGrid(rows);
        }
        , _addSortIcon : function(headerCell) { 
            let sortIcon = headerCell.appendChild(document.createElement('span'));
            sortIcon.className = 'sort'
            headerCell.style.paddingRight = '30px';
        }
        , _getSortDirection : function(property) {
            let sortSpan = grid.header.findCell(property).children[1];
            sortSpan.direction = sortSpan.direction !== 'asc' ? 'asc' : 'desc';
            return sortSpan.direction === 'asc' ? -1 : 1;
        }
        // , defaultComparator : Defined using defineProperty() below
        , _getSortCallback : function(property, options) {
            return () => { grid.sorting.sort(property, options); }
        }
        , _getSortOptions : function(property, options) { 
            if(typeof(options) === 'function') { options = { comparator : options } };
            if(typeof(options) !== 'object') { options = { comparator : grid.sorting.defaultComparator } };
            if(!options.comparator) { options.comparator = grid.sorting.defaultComparator; }

            options.direction = grid.sorting._getSortDirection(property);
            return options;
        }
        , _redrawGrid : function(rows) {
            grid.body.clear();
            let tbody = grid.table.tBodies[0];
            rows.forEach(r => tbody.appendChild(r));
        }
    }
    Object.defineProperty(grid.sorting, 'defaultComparator', { get : () => function(a, b) { if(a == b) { return 0; } return a < b ? 1 : -1; } });
}


Gridify.prototype.extensions.filtering = function(div){
    let grid = this;

    let onHeaderInitialized = grid.header.onInitialized;
    grid.header.onInitialized = function(header_options) {
        onHeaderInitialized(); 

        let filter_row = grid.table.tHead.insertRow();
        filter_row.id = grid.table.id + '_filters'
    }

    let onColumnAdded = grid.header.onColumnAdded;
    grid.header.onColumnAdded = function(headerCell, columnDefinition){
        onColumnAdded(headerCell, columnDefinition);

        grid.filtering.addFilter(columnDefinition.field, columnDefinition.filter);
    }

    let filterPending = 0;
    let filterDelay = function(callback) {
        return function(field_value, filter_value) {
            clearTimeout(filterPending);
            filterPending = setTimeout(()=>{ callback(field_value, filter_value); }, 150);
        }
    }

    grid.filtering = { 
        addFilter : function(field, options) {
            let cell = grid.filtering._addFilterCell(field)
            if(!options) { return; }
            options = grid.filtering._getFilterOptions(field, options);

            let control = options.control;
            control.rule = options.rule;
            control.property = field;
            control.addEventListener(options.event, filterDelay(grid.filtering.filter));
            cell.appendChild(control);
        }
        , cells : function() { return Array.from(grid.table.tHead.rows[1].cells); }
        , filter : function(){
            let filterControls = grid.filtering.getControls();
            let gridData = grid.data.get();
            
            grid.body.rows.forEach((row, i)=>{
                let filteredOut = filterControls.some((filterControl)=>{
                    let cellValue = gridData[i][filterControl.property];
                    return !filterControl.rule(cellValue, filterControl.value);
                });
                row.filtered = filteredOut;
                row.style.display = filteredOut ? 'none' : ''
            }); 
        }
        , getControls : function(){
            return grid.filtering.cells().map(cell => cell.firstChild).filter(x => !!x);
        }
        , _addFilterCell : function(field) {
            let cell = grid.table.tHead.rows[1].insertCell();
            cell.id = grid.table.id + '_filters_' + field;
            return cell;
        }
        , defaultFilterRule : function(cellValue, fieldValue) {
            return (''+cellValue).toLowerCase()
                .substr(0, fieldValue.length) === fieldValue.toLowerCase();
        }
        , _getFilterOptions : function(field, options) { 
            if(typeof(options) === 'function') { options = { rule : options } };
            if(typeof(options) !== 'object') { options = { } };

            options.rule = options.rule || grid.filtering.defaultFilterRule;
            options.control = options.control || grid.filtering._getDefaultFilterControl(field);
            options.event = options.event || 'keyup';

            return options;
        }
        , _getDefaultFilterControl : function(field){
            let control = document.createElement('input');
            control.type = 'text';
            control.id = grid.table.id + '_fiter_' + field;
            control.style = 'width:80%; display: block; margin: auto;';
            return control;
        }
    }
}

Gridify.prototype.extensions.paging = function(div){
    let grid = this;

    let onGridInitialized = grid.onInitialized;
    grid.onInitialized = function(options){
        onGridInitialized(options);
        grid.paging.initialize(options.paging);
    }

    grid.footer.pager = {
        initialize : function(options){
            let pagingRow = grid.table.tFoot.insertRow();
            pagingRow.id = grid.table.id + '_paging';
            pagingRow.options = JSON.stringify(options); 

            let leftCell = pagingRow.insertCell();
            leftCell.id = grid.table.id + '_paging_left';
            leftCell.style = 'width:33%;';

            let centerCell = pagingRow.insertCell();
            centerCell.id = grid.table.id + '_paging_center';
            centerCell.style = 'width:33%;';
            centerCell.appendChild(grid.footer.pager.centerCell_control(options));

            let rightCell = pagingRow.insertCell();
            rightCell.id = grid.table.id + '_paging_right';
            rightCell.style = 'width:33%;'    
        }
        , setPage : function(pageNumber){
            let textbox = document.getElementById(grid.table.id + '_paging_center_textbox');
            if(textbox) textbox.value = pageNumber;
            // set row counter when up
        }
        , centerCell_control : function(options){
            let container = document.createElement('div');
            container.style = 'width:120px'

            let textbox = document.createElement('input');
            textbox.id = grid.table.id + '_paging_center_textbox';
            textbox.className = 'pager_textbox';
            textbox.value = options.currentPage || 1;

            let label = document.createElement('span');
            label.style = 'width:40px;vertical-align:top';
            label.innerText = ' of ' + options.totalPages || 1;

            let leftArrow = document.createElement('div');
            leftArrow.className = 'pager_left';
            leftArrow.onclick = () => 
                grid.paging.page(textbox.value > 1 ? +textbox.value -1 : 1);
            
            let rightArrow = document.createElement('div');
            rightArrow.className = 'pager_right';
            rightArrow.onclick = () => 
                grid.paging.page(textbox.value < options.totalPages ? +textbox.value+1 : options.totalPages); 

            container.appendChild(leftArrow);
            container.appendChild(textbox);
            container.appendChild(label);
            container.appendChild(rightArrow);

            return container;
        }
    }

    grid.paging = { 
        initialize : function(options){
            if(!options) return;
            grid.paging.extendSorting();
            grid.paging.extendFiltering();
            options = grid.paging._defaultOptions(options);
            grid.table.options.paging = options;
            grid.footer.pager.initialize(options); 
            grid.paging.page(options.currentPage);
        }
        // Not sure how to make these modules agnostic of one another. 
        // In the meantime, paging needs to know about sorting and filtering.
        , extendSorting : function(){
            if(typeof(grid.sorting) !== 'undefined'){
                let sort = grid.sorting.sort;
                grid.sorting.sort = function(field, options = {}){
                    grid.paging.clear();
                    sort(field, options);
                    let currentPage = grid.table.options.paging.currentPage;    
                    grid.paging.page(currentPage);
                }
            }
        }
        , extendFiltering : function(){
            if(typeof(grid.filtering) !== 'undefined'){
                let filter = grid.filtering.filter;
                grid.filtering.filter = function(){
                    grid.paging.clear();
                    filter(); 
                    grid.paging.page();
                }
            }
        }
        , page : function(pageNumber = 1){
            grid.options.paging.currentPage = pageNumber;
            grid.paging._setFooterValues(pageNumber);
            grid.paging._setRowVisibility(pageNumber);
        }
        , clear : function() { 
            let rows = grid.body.rows;
            rows.forEach(r => { if(r.paged) { r.paged = undefined; r.style.display = ''; } });
        }
        , _setRowVisibility : function(pageNumber){
            let rows = grid.body.rows;
            let options = grid.options.paging;
            
            grid.paging.clear();

            let start = (options.currentPage-1)*options.rows;
            let end = options.currentPage*options.rows;

            // Only page visible rows
            rows = rows.filter(r => r.style.display !== 'none');
            rows = rows.filter((r, ix) => ix >= end || ix < start);

            rows.forEach(r => {r.style.display = 'none'; r.paged = true; });
        }
        , _setFooterValues : function(pageNumber){
            grid.footer.pager.setPage(pageNumber);
        }
        , _defaultOptions : function(options){
            if(typeof(options) !== 'object') options = {};
            options.rows = options.rows || 20;
            options.totalRows = options.totalRows || grid.data.get().length;
            options.totalPages = Math.ceil(options.totalRows/options.rows);
            options.currentPage = options.currentPage || 1;
            return options;
        }
    }
}