define([
    'lovesyou_template'
    ,'lovesyou_table'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
], (lyt, tbl, modal, spellbox, spells)=>{

    let draw_table = function(_spells){
        let spells_table = new tbl({
            container : document.getElementById('spells_table'),
            data : _spells,
            columns : [
                { 
                    field : 'Name', 
                    style : 'text-align:left; text-decoration:underline',
                    sort : true,
                    click: (e)=>{ 
                        let _spell = spells[e.target.innerHTML];
                        let _modal = modal.new();
                        _modal.onContentBound = ()=>{
                            let _spellbox = spellbox.new();
                            _spellbox.data = _spell;
                            _spellbox.container = document.getElementById('modal-content');
                            _spellbox.attach();
                        }
                        _modal.container = document.getElementById('spellbox_container');
                        _modal.attach();
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
    }



    let view = new lyt();
    view.content_url = 'site/dungeons-dragons/lookups/tabs/spells.html'

    view.onContentBound = function() {
        let _spells = [];
        for(let s in  spells)
            _spells.push(spells[s]);
        let spells_table = draw_table(_spells);

        let level_selector = document.getElementById('filter_level');
        level_selector.addEventListener('change', (e)=>{
            if(e.target.value === '') spells_table.filters.remove('Level');
            else spells_table.filters.add('Level', e.target.value);
        });

        let school_selector = document.getElementById('filter_school');
        school_selector.addEventListener('change', (e)=>{
            if(e.target.value === '') spells_table.filters.remove('School');
            else spells_table.filters.add('School', e.target.value);
        });
        
        let cast_time_selector = document.getElementById('filter_cast_time');
        cast_time_selector.addEventListener('change', (e)=>{
            if(e.target.value === '') spells_table.filters.remove('Casting Time');
            else spells_table.filters.add('Casting Time', (item)=>{
                switch(e.target.value){
                    case '1 bonus action' :
                        return (item['Casting Time'].substring(0, 7)=== '1 bonus');
                    break;
                    case '1 reaction' :
                        return (item['Casting Time'].substring(0, 10) === '1 reaction');
                    break;
                    case '1 action' :
                        return (item['Casting Time'].substring(0, 8) === '1 action');
                    break;
                    //case 'ritual' :
                        // ! completely missing!
                    //break;
                    case 'other' :
                        return ['1 bon', '1 rea', '1 act'].indexOf(item['Casting Time'].substring(0,5)) == -1;
                    break;
                }
            });
        });
    
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

    return view;
});