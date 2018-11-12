define([
    '5e/items'
    ,'5e/skills'
    ,'5e/spells'
], (items,skills,spells) => {


    // Eventually this may get migrated to its own file.
    // all its doing right now after changing this is 
    // setting the HD, which we can do separately. 
    function Class(name, level, archetype) {
        let Classes = {
            'Barbarian': { HD: 12 },
            'Bard': { HD: 8 },
            'Cleric': { HD: 8 },
            'Druid': { HD: 8 },
            'Fighter': { HD: 10 },
            'Monk': { HD: 8 },
            'Paladin': { HD: 10 },
            'Ranger': { HD: 10 },
            'Rogue': { HD: 8 },
            'Sorcerer': { HD: 6 },
            'Warlock': { HD: 8 },
            'Wizard': { HD: 6 }
        }

        let gameclass = this;

        gameclass.Name = name;
        gameclass.Level = parseInt(level) || 1;
        gameclass.HD = Classes[name].HD;
        gameclass.Archetype = archetype || '';
        return this;
    }

    let bonus = function(ability_score){
        return Math.floor((ability_score - 10) / 2);
    }

    let Character = function(data){
        let char = this;
        char.Name = data.Name || 'Unnamed';
        char.Languages = data.Languages || 'common';
        char.Race = data.Race || '';
        char.Senses = data.Senses || '';
        char.Size = data.Size || 'medium';
        char.Speed = data.Speed || 30;
        char.Alignment = data.Alignment || '';
        char.Stats = data.Stats;
        char.CarryWeight = char.Stats.Strength * 15;
        
        char.bonus = bonus;

        // Class and level information
        char.Classes = {};
        let level = 0;
        data.Classes.forEach(c =>{
            level += c.Level || 1;
            char.Classes[c.Name] = new Class(c.Name, c.Level, c.Archetype);
        });
        char.Level = level;
        char.Proficiency = Math.ceil((level/4)+1);

        // Defenses   
        char.Defenses = {
            AC : data.Defenses.AC || 10,
            Resistances : data.Defenses.Resistances || '',
            Immunities : data.Defenses.Immunities || '',
            ConditionImmunities : data.Defenses.ConditionImmunities || '',
            Saves : {
                Strength : bonus(char.Stats.Strength),
                Dexterity : bonus(char.Stats.Dexterity),
                Constitution : bonus(char.Stats.Constitution), 
                Intelligence : bonus(char.Stats.Intelligence), 
                Wisdom : bonus(char.Stats.Wisdom),
                Charisma : bonus(char.Stats.Charisma),
            }
        }
        for(let s in data.Defenses.Saves) {
            if(data.Defenses.Saves[s].Trained)
                char.Defenses.Saves[s] += char.Proficiency;
            // Expertise
        }

        let hp = 0;
        for(let c in char.Classes){
            let _class = char.Classes[c];
            hp += _class.Level * ((_class.HD/2)+1);
            if(data.Classes[0].Name === c)
                hp += ((_class.HD/2)-1);
        }
        char.Defenses.HP = hp + (bonus(char.Stats.Constitution) * char.Level);

        // Skills:
        char.Skills = {};
        for(let s in skills){
            char.Skills[s] = {
                Name : s,
                Ability : skills[s].substring(0,3),
                Trained : data.Skills[s] && data.Skills[s].Trained,
                Expertise : data.Skills[s] && data.Skills[s].Expertise,
            }
            char.Skills[s].Bonus = bonus(char.Stats[skills[s]]);
            if(char.Skills[s].Trained) char.Skills[s].Bonus += char.Proficiency;
            if(char.Skills[s].Expertise) char.Skills[s].Bonus += char.Proficiency;
        }
       

        char.Features = data.Features;
        char.Actions = data.Actions;
        char.Reactions = data.Reactions;
        char.Background = data.Background;

        char.Spells = {};
        data.Spells.forEach(s => char.Spells[s] = spells[s]);

        char.Items = {};
        for(let i in data.Items){
            if(!items[i]) 
                console.log(i + ' not found in items database.');
            
            let item = items[i] || { Name : i, Weight : 0, Cost : 0 };
            item.Count = data.Items[i];
            item.base_weight = item.Weight || 0;
            item.Weight = Math.floor(((item.base_weight * item.Count) * 10)) / 10;    
            char.Items[i] = item;
        }

        // Personality
    }

   
    return Character;
});