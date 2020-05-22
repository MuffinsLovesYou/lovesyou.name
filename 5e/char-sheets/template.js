import { Character } from '../character.js';

export let Template = new Character({
    Name : 'Template',
    Race : 'Human',
    Alignment : 'True Neutral',
    Speed : 30,
    Senses : '',
    Languages : 'common',
    Stats : {
        Strength : 15,
        Dexterity : 15,
        Constitution : 15,
        Intelligence : 8,
        Wisdom : 8, 
        Charisma : 8
    },
    Classes : [
        { Name : 'Fighter', Level : 1, Archetype : 'Champion' }
    ],
    Defenses : {
        //HP :
        AC : 18,
        Immunities : '',
        Resistances : '',
        ConditionImmunities : '',
        Saves : {
            Strength : { Trained : true },
            Constitution : { Trained : true }
        }
    },
    Skills : {
        Perception : { Trained : true },
        Athletics : { Trained : true }
    },
    Features : {
        'Duelist Fighting Style' : `+2 damage bonus with 1h weapon if no other weapon is equipped.`,
        'Spellcasting' : `Template is a 1st level spellcaster. Her spellcasting ability 
        modifier is Intelligence (spell save DC 9, +1 to hit with spell attacks). 
        She has the following spells prepared: 
        <br>Cantrip: Prestidigitation
        <br>1st Level (2 slots): Shield, Magic Missile` 
    },
    Spells : [
        // Cantrips
        'Prestidigitation',
        // Level 1
        'Shield',
        'Magic Missile',
    ],
    Items : {
        'Gold' : 20 
        ,'Chain Mail' : 1
        ,'Shield' : 1
    },
    Actions : {
        'Short Sword' : `Melee weapon attack: +5 to hit, reach 5ft, one target. Hit: 8 (1d6+5) slashing damage.`,
        'Magic Missile' : `Three 1d4+1 darts of force damage.`
    },
    Background : {
        Trait : ""
        ,Ideal : ""
        ,Bond : ""
        ,Flaw : ""
        ,Background : ""
        ,Description : ""
        ,Feature : ""
    }
});




