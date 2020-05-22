import { lite } from '../../../scripts/homerolled/lite.js';
import { markdown } from '../../../scripts/homerolled/markdown-parser.js';
import { Gridify } from '../../../scripts/homerolled/gridify.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/wild-magic/wild-magic.html',
    loadData : function() {
        import('../../../5e/imported/wild-magic-surge.js')
            .then(data => {
                this.setData(data.surgeTable);
            });
    },
    onDataLoaded : function(){ },
    parseTable : function(){
        let parsedData = [];

        for(let k in this.data){
            if(k%2==1) continue;
            parsedData.push({ 
                die : k-1 + '-'+ k,
                result : markdown.parse(this.data[k])
                });
        }
        return parsedData
    },
    onContentBound : function(){
        let view = this;
        document.getElementById('wild-magic-surge-d100')
            .addEventListener('click', view.onD100Click);
    },
    onDataBound(){ 
        this.initializeGrid();
    },
    initializeGrid : function(){
        let view = this;
        let data = view.parseTable();
        
        let grid = new Gridify('wild-magic-surge-table');
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
    onD100Click : function(e){
        let roll = Math.floor(Math.random() * 100) + 1
        roll = roll%2==0 ? roll-1+'-'+roll : roll + '-' + (+roll+1);
        let grid = new Gridify('wild-magic-surge-table');
        grid.table().tHead.rows[1].cells[0].firstChild.value = roll;
        grid.filtering.filter();
    }
})
