define([
    'lovesyou_util'
    ,'lovesyou_template'
], function(util, LYT){

    let template = new LYT();
    template.content_url = 'site/dungeons-dragons/character-sheets/elements/stats.html'

    template.onDataBound = function(){
        let set = (id, val) => {
            document.getElementById('character_' + id).innerHTML = val;
        }
        let data = this.data;
        
        set('Name', data.Name);
        set('Race', data.Race);
        set('Class', data.ClassName);
        set('Background', data.Background);
        set('XP', data.XP);

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
    }
    return template;
});