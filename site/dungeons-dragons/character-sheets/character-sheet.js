define([
    'lite'
    ,'xhr'
    ,'lovesyou_table'
    ,'site/dungeons-dragons/character-sheets/tabs/stats'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
], function (Lite, xhr, tbl, Stats, modal, spellbox, spells) {
    
    return Lite.extend({
        content_url : 'site/dungeons-dragons/character-sheets/character-sheet.html',
        onContentBound : function () {
            require(['scripts/homerolled/character-sheet-styler'], (sheet_styler) => {
                sheet_styler.stylize();
            });

            require(['site/common/dice/dice'], (dice) => {
                dice.attach(document.getElementById('dice-container'));
            });
        }
        , data_url : '5e/char-sheets/'+window.location.hash.split('/').splice(-1)+'.js'
        , onDataBound : function (data) {
            var view = this;
            view.stats_tab(data);
            view.personality_tab(data);
            view.skills_tab(data);
            view.features_tab(data);
            view.items_tab(data);
            view.spells_tab(data);
        }
        , stats_tab : function(data){
            new Stats({
                data : data, // might wanna make data binding more obvious 
                container : document.getElementById('character_stats')
            }).attach();
        }
        , personality_tab : function(data){
            if(data.Personality.isEmpty()) 
                return document.getElementById('personality_tab').style.display = 'none';
            
            let personality = document.getElementById('character_personality');
            for (var t in data.Personality) {
                if(typeof(data.Personality[t]) !== 'string') continue;
                let div = personality.appendChild(document.createElement('div'));
                let lspan = div.appendChild(document.createElement('span'));
                lspan.innerHTML = t + ':';
                let rspan = div.appendChild(document.createElement('span'));
                rspan.innerHTML = data.Personality[t];
            }  
        }
        , skills_tab : function(data){
            let _skills = [];

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
        , features_tab : function(data){
            let features = document.getElementById('character_features');
            if(data.Features.length === 0)
                document.getElementById('features_tab').style.display = 'none';
            for (let f in data.Features) {
                let span = features.appendChild(document.createElement('span'));
                span.innerHTML = data.Features[f] + ' <br/>';
            }    
        }
        , items_tab : function(data) {
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

            let totalWeight = _items.reduce((acc, item)=>{ return (acc+=(item.Weight||0)); }, 0);
            let lblItems = document.getElementById('label-items');
            lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.Carry_Weight;
        }
        , spells_tab : function(data) {
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
    });

});