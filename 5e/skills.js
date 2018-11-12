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





    return skills;
})