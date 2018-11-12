define([
    'lite'
], (Lite) => {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/character-sheets/tabs/main.html',
        onDataLoaded : function(data){
            let view = this;

            view.setSavesText();
            view.setStats();
            view.setLevelText();
        },
        setSavesText : function(){
            let data = this.data;
            let saves = [];
            for(let s in data.Defenses.Saves){
                let save = data.Defenses.Saves[s];
                saves.push(s.substr(0,3) + (save < 0 ? '' : '+') + save);
            }
            data.SaveText = saves.join(', ');
        },
        setStats : function(){
            let data = this.data;
            let stat = (stat) => data.Stats[stat] 
                + (data.Stats[stat] < 10 ? '' : '+')
                + data.bonus(data.Stats[stat]);
            data.Stats.Str = stat('Strength');
            data.Stats.Dex = stat('Dexterity');
            data.Stats.Con = stat('Constitution');
            data.Stats.Int = stat('Intelligence');
            data.Stats.Wis = stat('Wisdom');
            data.Stats.Cha = stat('Charisma');
        
        },
        setLevelText : function(){
            let data = this.data;
            let levelText = [];
            for(let c in data.Classes)
                levelText.push(data.Classes[c].Name + ' ' + data.Classes[c].Level);
            data.LevelText = levelText.join('/')
        },
        bindKeyValueSection : function(data_key, container) {
            let view = this, data = view.data[data_key];
            if(!data) return view.hide(container);
            let div = view.container.querySelector('#'+container);
            for(let i in data)
                div.appendChild(view.build_dynamic_item(i, data[i]));
        },
        build_dynamic_item : function(name, text){
            let new_item = document.createElement('div');
            let label = new_item.appendChild(document.createElement('span'));
            let description = new_item.appendChild(document.createElement('span'));
            label.className = 'character_grey_left';
            label.innerHTML = name + '. ';
            description.innerHTML = text;
            return new_item;
        },
        onDataBound : function(){
            let view = this;
            view.bindKeyValueSection('Features', 'character-features');
            view.bindKeyValueSection('Actions', 'character-actions');
            view.bindKeyValueSection('Reactions', 'character-reactions');
            this.hideEmptyFields();
        },
        hideEmptyFields : function(){
            let view = this, data = this.data, hide = this.hide;
            if(!data.Defenses.Resistances) hide('character_resistances');
            if(!data.Defenses.Immunities) hide('character_immunities');
            if(!data.Defenses.ConditionImmunities) hide('character_condition_immunities');
        },
        hide : function(element){
            document.getElementById(element).style.display = 'none';
        }
    });
});