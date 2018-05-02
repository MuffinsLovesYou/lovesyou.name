define([
    'lite'
    ,'scripts/homerolled/gridify'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
], (Lite, gridify, Modal, Spellbox, spells)=>{

    return Lite.extend({
        content : `<div id='spells-table'></div><div id='spellbox-container'></div>`,
        onContentBound : function() {
            let view = this;
            view.draw_table();
        },
        draw_table : function() {
            let grid = gridify('spells-table')
            grid.initialize({
                data : spells,
                columns : [
                    { 
                        field : 'Name', 
                        style : 'text-align:left; text-decoration:underline',
                        sort : true,
                        filter : true,
                        click: (e)=>{ 
                            new Modal({
                                onDataBound : function(){
                                    new Spellbox({
                                        data : spells[e.target.innerHTML],
                                        container : document.getElementById('modal-content'),
                                    }).attach();
                                }
                            }).attach();
                        } 
                    },
                    { field : 'Level', filter: true, sort:true, style:'width:40px;text-align:right' },
                    { field : 'School', filter : true, sort : true, style : 'width:75px'},
                    { field : 'Casting Time', filter : true, sort:true, style : 'max-width:75px;' },
                    { field : 'Range', filter : true, sort:true, style:'width:50px;' },
                    { field : 'Duration', filter : true, sort:true, } 
                ]
            });
        }        
    });
});