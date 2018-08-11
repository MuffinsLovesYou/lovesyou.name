define(['5e/imported/monsters'],(imported)=>{


    let monsters = {};

    let map_imported = function(imported){
        for(let m in imported){
            let monster = {};
            let imp = imported[m];

            monster.Name = m;
            monster.Alignment = imp.alignment;
            monster.Challenge = imp.cr;
            monster.Description = imp.description;
            monster.Languages = imp.languages;
            monster.Size = {
                'T' : 'Tiny',
                'S' : 'Small',
                'M' : 'Medium',
                'L' : 'Large',
                'H' : 'Huge',
                'G' : 'Gargantuan'
            }[imp.size];
            monster.Speed = imp.speed;
            monster.Type = imp.type;
            // slots?
            // spells?
            // skill
            // passive
            monster.Senses = imp.senses
            
            monster.Stats = {
                Str : imp.str,
                Dex : imp.dex,
                Con : imp.con,
                Int : imp.int,
                Wis : imp.wis,
                Cha : imp.cha
            }
            monster.Defenses = {
                Ac : imp.ac,
                ConditionImmune : imp.conditionImmune,
                Hp : imp.hp,
                Immune : imp.immune||'',
                Resist : imp.resist,
                Vulnerable : imp.vulnerable,
                Saves : imp.save,
            }
            monster.Action = [];
            if(imp.action){
                if(!Array.isArray(imp.action)) imp.action = [imp.action];
                imp.action.forEach(a=>{
                    monster.Action.push({
                        Name : a.name,
                        Text : Array.isArray(a.text) ? a.text.join('<br>') : a.text
                    })
                });
            }
            monster.Legendary = [];
            if(imp.legendary){
                if(!Array.isArray(imp.legendary)) imp.legendary = [imp.legendary];
                imp.legendary.forEach(l=>{
                    monster.Legendary.push({
                        Name : l.name,
                        Text : Array.isArray(l.text) ? l.text.join('<br>') : l.text
                    })
                })
            }
            monster.Reaction = [];
            if(imp.reaction){
                if(!Array.isArray(imp.reaction)) imp.reaction = [imp.reaction];
                imp.reaction.forEach(r=>{
                    monster.Reaction.push({
                        Name : r.name,
                        Text : Array.isArray(r.text) ? r.text.join('<br>') : r.text
                    })
                });
            }
            monster.Trait = [];
            if(imp.trait){
                if(!Array.isArray(imp.trait)) imp.trait = [imp.trait]
                imp.trait.forEach(t=>{
                    monster.Trait.push({
                        Name : t.name,
                        Text : Array.isArray(t.text) ? t.text.join('<br>') : t.text
                    })
                });
            }

            monsters[m] = monster;
        }
    }
    map_imported(imported);


    return monsters;

});