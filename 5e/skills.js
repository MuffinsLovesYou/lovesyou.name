define([], () => {

    let skills = {};
    skills.Athletics = 'Strength';
    ['Acrobatics', 'Slight of Hand', 'Stealth'].forEach((s) => {
        skills[s] = 'Dexterity';
    });
    ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'].forEach((s) => {
        skills[s] = 'Intelligence';
    });
    ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'].forEach((s) => {
        skills[s] = 'Wisdom';
    });
    ['Deception', 'Intimidation', 'Performance', 'Persuasion'].forEach((s) => {
        skills[s] = 'Charisma';
    });

    let Skill = function (name, stat, char) {
        let skill = this;
        skill.Name = name;
        skill.Ability = stat.substring(0, 3);
        skill.Trained = false;
        Skill.Expertise = false;
        Object.defineProperty(skill, 'Bonus', {
            get: function () {
                let skillBonus = char.Stats[stat].Bonus();
                if (skill.Trained) {
                    skillBonus += char.Proficiency;
                }
                if(skill.Expertise) { skillBonus += char.Proficiency; }
                return skillBonus;
            },
            enumerable : true
        });
    }

    skills.map = function (char) {
        char.Skills = {};
        for (let s in skills) {
            if (typeof (skills[s]) !== 'function') {
                char.Skills[s] = new Skill(s, skills[s], char);
            }
        }
    }




    return skills;
})