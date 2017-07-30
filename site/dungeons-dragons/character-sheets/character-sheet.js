define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'lovesyou_table'
    ,'site/dungeons-dragons/character-sheets/tabs/stats'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
], function (util, Template, tbl, stats, modal, spellbox, spells) {

    let personality_tab = (data)=>{
        var personality = document.getElementById('character_personality');
        if(data.Personality.isEmpty()) { 
            document.querySelector('#personality_tab').style.display = 'none';
        }
        for (var t in data.Personality) {
            if(typeof(data.Personality[t]) !== 'string')
                continue;
            let div = document.createElement('div');
            let lspan = document.createElement('span');
            let rspan = document.createElement('span');

            lspan.innerHTML = t + ':';
            rspan.innerHTML = data.Personality[t];
            div.appendChild(lspan);
            div.appendChild(rspan);
            personality.appendChild(div);
        }
    }
    let skills_tab = (data)=>{
        let _skills = [];

        // kk lets move away from blanket page stylings. 
        for(let s in data.Skills) _skills.push(data.Skills[s]);
        let skillstable = new tbl({
            container : document.getElementById('skills_container'),
            data : _skills,
            columns : [
                { field : 'Name', style : 'text-align:left', sort:true },
                { field : 'Ability', sort:true },
                { field : 'Trained', format : (x)=>{ return x?'Yes':'No'; }, sort:true },
                { field : 'Bonus', style : 'text-align:right', sort:true}
            ],
        });
        skillstable.draw();
    }
    let items_tab = (data)=>{
        let _items = [];
        for(let i in data.Items) {
            if(typeof(data.Items[i])!=='object') continue;
            _items.push(data.Items[i]);
        }
        let items_table = new tbl({
            container : document.getElementById('items_container'),
            data : _items,
            columns : [
                { field : 'Name', style : 'text-align:left', sort:true },
                { field : 'Count', style : 'text-align:right' },
                { field : 'Value', sort:true },
                { field : 'Weight', style : 'text-align:right', sort:true }
            ],
        });
        items_table.draw();

        let totalWeight = 0;
        for (let i in _items) {
            totalWeight += _items[i].Weight || 0;
        }
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.Carry_Weight;
    }

    let spells_tab = (data)=>{
        let _spells = [];
        for(let s in data.Spells) {
            if(typeof(data.Spells[s])!=='object') continue;
            _spells.push(data.Spells[s]);
        }
        let spells_table = new tbl({
            container : document.getElementById('spells_container'),
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
                        _modal.container = document.getElementById('spellbox-container');
                        _modal.attach();
                    } 
                },
                { field : 'Level', sort:true },
                { field : 'Casting Time', style : 'max-width:300px; text-align:left' },
                { field : 'Range' },
                { field : 'Duration' } 
            ],
        });
        spells_table.draw();
        if(_spells.length===0) document.getElementById('spells_tab').style.display = 'none';
    }

    var template = new Template();
    template.content_url = 'site/dungeons-dragons/character-sheets/character-sheet.html';
    let character_url = window.location.hash.split('/').pop();
    template.data_url = '5e/char-sheets/'+character_url+'.js'; 
    
    template.onDataBound = function () {
        var _this = this;
        let data = _this.data;
        
        stats = stats.new();
        stats.container = document.getElementById('character_stats_container');
        stats.data = data;
        stats.attach();

        personality_tab(data);
        skills_tab(data);

        let features = document.getElementById('character_features');
        if(features.length === 0)
            document.querySelector('#features_tab').style.display = 'none';
        for (let f in data.Features) {
            let feature = data.Features[f];
            let span = document.createElement('span')
            span.innerHTML = feature + ' <br/>';
            features.appendChild(span);
        }
        
        items_tab(data);
        spells_tab(data);
    }
    template.onContentBound = function () {
        require(['scripts/homerolled/character-sheet-styler'], (sheet_styler) => {
            sheet_styler.stylize();
        });

        require(['site/common/dice/dice'], (dice) => {
            dice.container = document.getElementById('dice-container');
            dice.attach();
        })
    }

    return template;
});