define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'lovesyou_table'
], function (util, LYTemplate, tbl) {

    var template = new LYTemplate();
    template.content_url = 'site/dungeons-dragons/character-sheets/elements/character-sheet.html';
    template.onDataBound = function () {
        var _this = this;
        let set = (id, val) => {
            document.getElementById('character_' + id).innerHTML = val;
        }
        let data = _this.data;
        set('Name', data.Name);
        set('Race', data.Race);
        set('Class', data.ClassName);
        set('Background', data.Background);
        set('XP', data.XP);

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

        set('Strength', data.Stats.Strength);
        set('Dexterity', data.Stats.Dexterity);
        set('Constitution', data.Stats.Constitution);
        set('Intelligence', data.Stats.Intelligence);
        set('Wisdom', data.Stats.Wisdom);
        set('Charisma', data.Stats.Charisma);

        set('HP', data.HP);
        set('AC', data.AC);
        set('StrengthSave', data.Saves.Strength.Bonus);
        set('DexteritySave', data.Saves.Dexterity.Bonus);
        set('ConstitutionSave', data.Saves.Constitution.Bonus);
        set('IntelligenceSave', data.Saves.Intelligence.Bonus);
        set('WisdomSave', data.Saves.Wisdom.Bonus);
        set('CharismaSave', data.Saves.Charisma.Bonus);

        let _skills = [];
        for(let s in data.Skills) _skills.push(data.Skills[s]);
        let skillstable = new tbl({
            container : document.getElementById('skills_container'),
            data : _skills,
            columns : [
                { data_field : 'Name' },
                { data_field : 'Ability' },
                { data_field : 'Trained' },
                { data_field : 'Bonus'}
            ]
        });
        skillstable.draw();

        let features = document.getElementById('character_features');
        if(features.length === 0)
            document.querySelector('#features_tab').style.display = 'none';
        for (let f in data.Features) {
            let feature = data.Features[f];
            let span = document.createElement('span')
            span.innerHTML = feature + ' <br/>';
            features.appendChild(span);
        }

        let _items = [];
        for(let i in data.Items) {
            if(typeof(data.Items[i])!=='object') continue;
            _items.push(data.Items[i]);
        }
        let items_table = new tbl({
            container : document.getElementById('items_container'),
            data : _items,
            columns : [
                { data_field : 'Name' },
                { data_field : 'Count' },
                { data_field : 'Value' },
                { data_field : 'Weight' }
            ]
        });
        items_table.draw();

        let totalWeight = 0;
        for (let i in _items) {
            totalWeight += _items[i].Weight || 0;
        }
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.Carry_Weight;

        let _spells = [];
        for(let s in data.Spells) {
            if(typeof(data.Spells[s])!=='object') continue;
            _spells.push(data.Spells[s]);
        }
        let spells_table = new tbl({
            container : document.getElementById('spells_container'),
            data : _spells,
            columns : [
                { data_field : 'Name' },
                { data_field : 'Level' },
                { data_field : 'Casting Time' },
                { data_field : 'Range' },
                { data_field : 'Duration' } 
            ]
        });
        spells_table.draw();

        Array.from(spells_table.table.rows).forEach((row,r)=>{
            row.cells[0].addEventListener('click', (e)=>{
                let spell = e.target.innerHTML;

                require(['site/common/modal/modal',
                    'site/dungeons-dragons/character-sheets/elements/spellbox/spellbox',
                    '5e/spells'
                ], (modal, spellbox, spells) => {
                    spell = spells[spell];
                    modal = modal.new();
                    modal.onContentBound = () => {
                        spellbox = spellbox.new();
                        spellbox.data = spell;
                        spellbox.container = document.getElementById('modal-content');
                        spellbox.attach();
                    };
                    modal.container = document.getElementById('spellbox-container');
                    modal.attach();
                    
                });      
            })
        });
    }
    template.onContentBound = function () {
        var fileref = document.createElement("link");
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = 'css/homerolled/character-sheet.css';
        document.getElementsByTagName("head")[0].appendChild(fileref)

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