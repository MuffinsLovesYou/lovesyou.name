define([
    'lite'
    ,'lovesyou_table'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
], (Lite, tbl, Modal, Spellbox, spells)=>{

    return Lite.extend({
        content_url : 'site/dungeons-dragons/lookups/tabs/spells.html',
        onContentBound : function() {
            let view = this;
            let grid = view.draw_table(spells);
            document.getElementById('filter_level')
                .addEventListener('change', (e, val=e.target.value)=>{
                    val ? grid.filters.add('Level', val) : grid.filters.remove('Level');
                });

            document.getElementById('filter_school')
                .addEventListener('change', (e, val=e.target.val)=>{
                    val ? grid.filters.add('School', val) : grid.filters.remove('School')
                });

            view.init_cast_time_selector(spells_table);
            view.init_duration_selector(spells_table);
            view.init_range_selector(spells_table);
        },
        draw_table : function(_spells){
            let spells_table = new tbl({
                container : document.getElementById('spells_table'),
                data : _spells,
                columns : [
                    { 
                        field : 'Name', 
                        style : 'text-align:left; text-decoration:underline',
                        sort : true,
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
                    { field : 'Level', sort:true },
                    { field : 'Casting Time', style : 'max-width:300px; text-align:left' },
                    { field : 'Range', sort:true },
                    { field : 'Duration' } 
                ],
            });
            spells_table.draw();
            return spells_table;
        },
        init_cast_time_selector : function(spells_table) {
            let cast_time_selector = document.getElementById('filter_cast_time');
            cast_time_selector.addEventListener('change', (e)=>{
                if(e.target.value === '') spells_table.filters.remove('Casting Time');
                else spells_table.filters.add('Casting Time', (item)=>{
                    return {
                        '1 bonus action' : (item['Casting Time'].substr(0, 4)==='1 bo'),
                        '1 reaction' : (item['Casting Time'].substr(0,4)==='1 re'),
                        '1 action' : (item['Casting Time'].substr(0,4)==='1 ac'),
                        // Ritual missing
                        'other' : (['1 bo', '1 re', '1 ac'].indexOf(item['Casting Time'].substr(0, 4)) < 0)
                    }[e.target.value];
                });
            });  
        },
        init_range_selector : function(spells_table) {
            let range_selector = document.getElementById('filter_range');
            range_selector.addEventListener('change', (e)=>{
                if(e.target.value === '') spells_table.filters.remove('Range');
                else spells_table.filters.add('Range', (item)=>{
                    let val;
                    switch(e.target.value){
                        case 'self' : return item.Range === 'Self'; break;
                        case 'touch' : return item.Range === 'Touch'; break;
                        case '<30' :
                            val = item.Range.replace(/\D/g, '');
                            return (+val > 0 && +val <= 30 && item.Range.includes('feet'));
                        break;
                        case '30-60': 
                            val = item.Range.replace(/\D/g, '');
                            return  (+val > 30 && +val <= 60 && item.Range.includes('feet'));
                        break;
                        case '60<' :
                            val = item.Range.replace(/\D/g, '');
                            return (+val > 60 || (+val > 0 && !item.Range.includes('feet')));
                        break;
                    }
                });
            });
        },
        init_duration_selector : function(spells_table){
            let duration_selector = document.getElementById('filter_duration');
            duration_selector.addEventListener('change', (e)=>{
                if(e.target.value === '') spells_table.filters.remove('Duration');
                else spells_table.filters.add('Duration', (item)=>{
                    let val;
                    switch(e.target.value){
                        case 'Instantaneous': return item.Duration === 'Instantaneous'; break;
                        case '1 Round' : return item.Duration === '1 round'; break;
                        case '<=1' : return /(up to 1 minute)/.test(item.Duration); break;
                        case '<=10' : return /(up to 10)/.test(item.Duration); break;
                        case '<=60' : return /(up to 1 hour)/.test(item.Duration); break;
                        case '>60' : return /(hours)/.test(item.Duration); break;
                    }
                });
            });
        }        
    });
});