define([
    'lovesyou_util', 
    'lovesyou_template'
], function (util, LYTemplate) {


    var template = new LYTemplate();
    template.ContentUrl = 'site/dungeons-dragons/character-sheets/elements/' + 'character-sheet.html';
    template.DataBind = function () {
        let set = (id, val) => {
            document.getElementById('character_' + id).innerHTML = val;
        }
        let data = template.Data;
        set('Name', data.Name);
        set('Race', data.Race);
        set('Class', data.ClassName);
        set('Background', data.Background);
        set('XP', data.XP);


        var personality = document.getElementById('character_personality');
        for (var t in data.Personality) {
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

        let obj = data.Skills;
        let tbl = document.getElementById('table-skills');
        util.fill_table({
            columns: ['Name', 'Ability', 'Trained', 'Bonus'],
            data: obj,
            table: tbl
        });

        let features = document.getElementById('character_features');

        for (let f in data.Features) {
            let feature = data.Features[f];
            let span = document.createElement('span')
            span.innerHTML = feature + '<br>';
            features.appendChild(span);
        }

        obj = data.Items;
        tbl = document.getElementById('table-items');
        util.fill_table({
            columns: ["Name", "Count", "Value", "Weight"],
            data: obj,
            table: tbl
        });

        let totalWeight = 0;
        for (let i in obj) {
            totalWeight += obj[i].Weight || 0;
        }
        let lblItems = document.getElementById('label-items');
        lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.Carry_Weight;

        obj = data.Spells;
        tbl = document.getElementById('table-spells');
        util.fill_table({
            columns: ["Name", 'Level', 'Casting Time', 'Range', 'Duration' /* Ritual */ ],
            data: obj,
            table: tbl
        });
        // on-click spell descriptions.
        for (let i = 1; i < tbl.rows.length; i++) {
            let row = tbl.rows[i];
            let cell = row.cells[0];
            cell.addEventListener('click', (e) => {
                let spell = e.target.innerHTML;

                require(['site/common/modal/modal',
                    'site/dungeons-dragons/character-sheets/elements/spellbox/spellbox',
                    '5e/spells'
                ], (modal, spellbox, spells) => {

                    spell = spells[spell];
                    modal.OnAttach = (() => {
                        let base_attach = modal.OnAttach;
                        return () => {
                            base_attach();
                            spellbox.Container = document.getElementById('modal-content');
                            spellbox.Data = spell;
                        }
                    })();
                    modal.Container = document.getElementById('spellbox-container');
                });


            });

        }
    }
    template.OnAttach = function () {
        var fileref = document.createElement("link");
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        fileref.href = 'css/homerolled/character-sheet.css';
        document.getElementsByTagName("head")[0].appendChild(fileref)

        require(['scripts/homerolled/character-sheet-styler'], (sheet_styler) => {
            sheet_styler.stylize();
        });


        require(['site/common/dice/dice'], (dice)=>{
            dice.Container = document.getElementById('dice-container');           
        })
    }


    return template;
});