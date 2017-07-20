define([],()=>{

    // sorting. 

    // stripped down html table builder 
    let LYT = function(options){
        let lyt = this;
        options = options || {};
        
        lyt.container = options.container;// html container
        lyt.data = options.data; // json object 
        lyt.columns = options.columns; // array of column options/definitions 

        lyt.draw = ()=>{
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
                hc.innerHTML = c.header || c.field;
                hc.style = c.header_style;
            });
            
            let tb = table.createTBody();
            lyt.data.forEach((row,r)=>{
                let tr = tb.insertRow(r);
                tr.id = table.id+'_r'+r;
                lyt.columns.forEach((col,c)=>{
                    let tc = tr.insertCell(c);
                    tc.id = tr.id + '_c'+c;
                    tc.innerHTML = row[col.field];
                    tc.style = col.column_style;
                    if(col.click) tc.addEventListener('click',col.click);
                });
            });

            let tf = table.createTFoot();

            lyt.container.appendChild(table);
        }

        return this;
    } 


    return LYT;
});