define(['5e/imported/spells'], (imported_spells)=>{

    let spells = {};
    imported_spells.forEach(s => {
        let spell = {};
        spell.CastingTime = s.Cast_Time;
        spell.Components = s.Components + (s.Materials ? " ("  + s.Materials + ")" : "");
        spell.Description = s.Description_Higher_Levels;
        spell.Duration = s.Duration;
        spell.Level = s.Level;
        spell.Level_School = s.Level_School + (s.Ritual ? ' (ritual)' : '');
        spell.Name = s.Name;
        spell.Range = s.Range;
        spell.Ritual = s.Ritual;
        spell.School = s.School;
        spells[s.Name] = spell;
    });

    return spells;
});