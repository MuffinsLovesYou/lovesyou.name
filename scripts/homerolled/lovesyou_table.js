define([],()=>{

    // sorting. 

    // stripped down html table builder 
    let LYT = function(options){
        let lyt = this;
        options = options || {};
        
        lyt.container = options.container;// html container
        lyt.data = options.data; // json object 
        lyt.columns = options.columns; // array of column options/definitions 
        lyt.all_col = options.all_col || {}; // style for every column,
        let td_defaults = 'text-align:center; padding: .04rem .05rem; border-bottom:solid thin'// bit hacky right now.
        let th_defaults = 'font-weight:bold; text-align:center; padding:4px 16px 4px 16px;'
        let set_style = function(elem, style) {
            style = style || '';
            style = (style||'').split(';');
            style = style.map((x)=>{ 
                return x.trim().split(':');
            });
            style.forEach((kv)=>{ elem.style[kv[0]] = kv[1]; });
        }


        let col_sort = function(property){
            let e = ()=>{ 
                let v1 = lyt.data[0][property];
                let v2 = lyt.data[lyt.data.length-1][property];
                let asc = v1 < v2;
                lyt.data = lyt.data.sort((x,y)=>{
                    let xv = x[property];
                    let yv = y[property];
                    return xv<yv ? asc : !asc;
                });
                lyt.draw();
            }
            return e;
        }

        // need a sortable.   

        lyt.draw = function(){
            while(lyt.container.firstChild)
                lyt.container.removeChild(lyt.container.firstChild);
            lyt.table = document.createElement('table');

            let table = lyt.table;
            let r1 = lyt.data[0];
            table.id = lyt.container.id + '_t';

            let th = table.createTHead();
            let hr = th.insertRow(0);
            lyt.columns.forEach((c, i)=>{
                let hc = hr.insertCell(i);
                hc.innerHTML = '';//
                let sp = document.createElement('span');
                sp.innerHTML = c.header || c.field;
                hc.appendChild(sp);
                set_style(hc, th_defaults);
                if(lyt.all_col.hstyle) set_style(hc, lyt.all_col.hstyle)
                set_style(hc, c.hstyle);
                if(c.sort){
                    let s = document.createElement('span');
                    s.className = 'sort';
                    sp.appendChild(s);
                    hc.style.paddingRight = '30px';
                    hc.addEventListener('click', col_sort(c.field));
                }
            });
            
            let tb = table.createTBody();
            lyt.data.forEach((row,r)=>{
                let tr = tb.insertRow(r);
                tr.id = table.id+'_r'+r;
                lyt.columns.forEach((col,c)=>{
                    let td = tr.insertCell(c);
                    td.id = tr.id + '_c'+c;
                    let crval = row[col.field];
                    if(col.format) crval = col.format(crval);
                    td.innerHTML = crval;
                    set_style(td, td_defaults);
                    if(lyt.all_col.style) set_style(td, lylt.all_col.style);
                    set_style(td, col.style);
                    if(col.click) td.addEventListener('click',col.click);
                });
            });

            let tf = table.createTFoot();

            lyt.container.appendChild(table);
        }

        return this;
    } 


    return LYT;
});