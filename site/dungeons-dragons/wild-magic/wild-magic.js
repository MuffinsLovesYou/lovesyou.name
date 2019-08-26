define([
    'lite'
    ,'scripts/vendor/marked'
    ,'scripts/homerolled/gridify'
],(lite, md, Gridify)=>{

    return lite.extend({
        content_url : 'site/dungeons-dragons/wild-magic/wild-magic.html',
        data_url : '5e/imported/wild_magic_surge.js',
        onDataLoaded : function(){ },
        parse_table : function(){
            let parsed_data = [];
            for(let k in this.data){
                if(k%2==1) continue;
                parsed_data.push({ 
                    die : k-1 + '-'+ k,
                    result : md.parse(this.data[k])
                 });
            }
            return parsed_data
        },
        onContentBound : function(){
            let view = this;
            view.initialize_grid();
            document.getElementById('wild_magic_surge_d100')
                .addEventListener('click', view.on_d100_click);
        },
        initialize_grid : function(){
            let view = this;
            let data = view.parse_table();
            
            let grid = new Gridify('wild_magic_surge_table');
            grid.initialize({
                data : data,
                columns : [
                    { field : 'die', 
                        header : 'd100', 
                        filter : true
                        , style : 'width:10%; max-width: 100px; min-width:50px;'
                    },
                    { field : 'result', 
                        header : 'Effect', 
                        filter : {
                            rule : (a, b) => a.toLowerCase().includes(b.toLowerCase()),
                        },
                        style : 'width:90%;max-width:400px;white-space:normal;overflow-wrap:break-word'
                    }
                ]
            });
        
        },
        on_d100_click : function(e){
            let roll = Math.floor(Math.random() * 100) + 1
            roll = roll%2==0 ? roll-1+'-'+roll : roll + '-' + (+roll+1);
            let grid = new Gridify('wild_magic_surge_table');
            grid.table().tHead.rows[1].cells[0].firstChild.value = roll;
            grid.filtering.filter();
        }
    })

});