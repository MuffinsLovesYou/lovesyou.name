define([
    'lite'
    ,'lovesyou_table'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/monsterbox/monsterbox'
    , '5e/monsters'
], (Lite, tbl, Modal, MonsterBox, monsters)=>{

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
            
            let monsters_table = new tbl({
                container : document.getElementById('monsters-table'),
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
                    , { field : 'cr', header : 'CR', sort : (x)=>{ console.log('sort func', x) } }
                    , { field : 'type', format : (v)=> { return v.split(',')[0]; }, header : 'Type', sort : true }
                    , { field : 'alignment', header : 'Alignment', sort : true }
                ]
            });
            monsters_table.draw();
            return monsters_table;
        },
        
    });

});