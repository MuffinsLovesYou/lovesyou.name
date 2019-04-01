define([
    'lite'
    ,'scripts/homerolled/gridify'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/monsterbox/monsterbox'
    , '5e/monsters'
], (lite, Gridify, Modal, MonsterBox, monsters)=>{

    return lite.extend({
        content : `<div id='monsters-table'></div><div id='monsterbox-container'></div>`
        , onContentBound : function(){
            let view = this;
            view.draw_table();
        }
        ,draw_table : function(_spells){
            let view = this;
            let grid = new Gridify('monsters-table')
            grid.initialize({
                data : monsters,
                columns : [
                    {
                        field : 'Name',
                        filter : true,
                        header : 'Name',
                        style : 'text-align:left; text-decoration:underline',
                        sort : true,
                        click : (e)=>{
                            new Modal({
                                onDataBound : function() {
                                    new MonsterBox({
                                        data : monsters[e.target.innerText]
                                        , container : document.getElementById('modal-content')
                                        , onDataBound : function() {
                                            let box = document.getElementById('monsterbox');
                                            box.style.maxHeight = '80%';
                                            box.style.overflow  = 'auto';
                                        }         
                                    }).attach();
                                }
                            }).attach();
                        }
                    }
                    , { field : 'Challenge', header : 'CR', 
                        filter : { rule : view.challenge_rating_filter }, 
                        sort : { comparator : view.challenge_rating_sort }
                    }
                    , { field : 'Type', filter : true, format : (v)=> { return v.split(',')[0]; }, header : 'Type', sort : true }
                    , { field : 'Alignment', filter : true, header : 'Alignment', sort : true }
                ]
                , paging : true
            });
        }
        , challenge_rating_sort : function(a, b) {
            let parse = (cr) => cr.indexOf`/` === -1 ? +cr : 1/(cr.split`/`[1]); 
            a = parse(a);
            b = parse(b);
            if(a==b) return 0;
            return a > b ? 1 : -1;
        }
        , challenge_rating_filter : function(cell_value, filter_value){
            if(+filter_value === 1) return +cell_value === 1;
            return cell_value.substr(0, filter_value.length) === filter_value; 
        }
    });

});