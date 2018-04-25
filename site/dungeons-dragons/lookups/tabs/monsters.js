define([
    'lite'
    ,'scripts/homerolled/gridify'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/monsterbox/monsterbox'
    , '5e/monsters'
], (Lite, gridify, Modal, MonsterBox, monsters)=>{

    // bugs : 
    // tabs are resetting with modal pop
    // on bind function for data so we can format type

    return Lite.extend({
        content : `<div id='monsters-table'></div><div id='monsterbox-container'></div>`
        , onContentBound : function(){
            let view = this;
            view.draw_table();
        }
        ,draw_table : function(_spells){
            let view = this;
            var grid = gridify('monsters-table')
            grid.initialize({
                data : monsters,
                columns : [
                    {
                        field : 'name',
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
                    , { field : 'cr', filter : true, header : 'CR', sort : view.challenge_rating_sort }
                    , { field : 'type', filter : true, format : (v)=> { return v.split(',')[0]; }, header : 'Type', sort : true }
                    , { field : 'alignment', filter : true, header : 'Alignment', sort : true }
                ]
            });
        },
        challenge_rating_sort : function(a, b) {
            let cr_to_dec = (cr) => { return ~cr.indexOf('/') ? 1/cr.split`/`[1] : +cr; }
            a = cr_to_dec(a);
            b = cr_to_dec(b);
            if(a==b) return 0;
            return a > b ? 1 : -1;
        }
    });

});