
define([
	'5e/character.js'
],(Character)=>{
	let Pepper = new Character({
        Name : '"Sargeant" Pepper Rockseeker',
        Race : 'Hill Dwarf',
        Alignment : 'Neutral Good',
        Speed : 25,
        Senses : 'Darkvision 60',
        Languages : 'common, dwarven',
        Stats : {
            Strength : 12,
            Dexterity : 9,
            Constitution : 16,
            Intelligence : 10,
            Wisdom : 18, 
            Charisma : 12
        },
        Classes : [
           { Name : 'Cleric', Level : 4, Archetype : 'Light Domain' }
        ],
        Defenses : {
            //HP :
            AC : 19,
            Resistances : '',
            ConditionImmunities : '',
            Saves : {
                Charisma : { Trained : true },
                Wisdom : { Trained : true }
            }
        },
        Skills : {
            Perception : { Trained : true },
            Persuasion : { Trained : true },
            Religion : { Trained : true },
            Athletics : { Trained : true }
        },
        Features : {
            'Tool Proficiencies' : `Playing cards and cook's tools.`,
            'Disciple of Life' : `2+spell level bonus to amount healed from spells.`,
            'Spellcasting' : `Pepper is a 4th level spellcaster. Her spellcasting ability 
            modifier is Wisdom (spell save DC 14, +6 to hit with spell attacks). 
            She has the following spells prepared: 
            <br>Cantrip: Guidance, Sacred Flame, Mending, Light
            <br>1st Level (4 slots): Bless, Cure Wounds, Shield of Faith, Healing Word, 
                Sanctuary, Detect Magic, Command
            <br>2nd Level (3 slots): Spiritual Weapon, Lesser Restoration, Warding Bond` 
        },
        Spells : [
            // Cantrips
            'Guidance',
            'Sacred Flame',
            'Mending',
            'Light',
            // Level 1
            // Domain
            'Bless',
            'Cure Wounds',
            
            'Shield of Faith',
            'Healing Word',
            'Sanctuary',//rit
            'Detect Magic',//rit
            'Command',   
            // Level 2
            // Domain
            'Spiritual Weapon', 
            'Lesser Restoration', 
            
            'Warding Bond',
        ],
        Items : {
            'Gold' : 20 
            ,'Chain Mail' : 1
            ,'Shield' : 1
            ,'Holy Symbol (Amulet)' : 1
            ,'Pouch' : 1
            ,'Dagger' : 1
            // explorer's pack
            ,'Backpack' : 1
            ,'Bedroll' : 1
            ,'Mess Kit' : 1
            ,'Rations' : 10
            ,'Waterskin' : 1
            ,'Hempen Rope (50 feet)' : 1
            ,'Candle' : 10
            ,'Playing Card Set' : 1
            ,'Sealing Wax' : 1
            ,'Chalk' : 5
            ,'Steel Mirror' : 1
            ,'Fishing Tackle' : 1
            ,'Iron Pot' : 1
            ,'Common Clothes' : 1
            ,'Soap' : 1
            ,'Whetstone' : 1
            ,"Cook's Utensils" : 1
            ,'Map or Scroll Case' : 1 // spices 
        },
        Actions : {
            'Sacred Flame' : `A creatures you can see within 60 feet must succeed 
            on a dexterity saving throw or take 1d8 radiant damage.`
        },
        Background : {
			Trait : "I'm always polite and respectful. Also, I don't trust my gut feelings, " 
                + "so I tend to wait for others to act."
            ,Ideal : "Respect. People deserve to be treated with dignity and courtesy."
            ,Bond : "I have three cousins--Gundren, Tharden, and Nundro Rockseeker-- who "
                + "are my friends and cherished clan members."
            ,Flaw : "I secretly wonder whether the gods care about mortal affairs at all."
            ,Background : ""
            ,Description : "Trained as a soldier on the island of Mintarn, Pepper traveled "
                + "to Neverwinter as part of a mercenary company that serves as both army and city watch. She grew "
                + "disillusioned with her fellow soldiers, who seem to enjoy their authority at the expense of the "
                + "people they're supposed to protect. Recently she disobeyed an order and was suspended from active "
                + "duty. Personal goal: Teach the Redbrands a Lesson. "
            ,Feature : ""
    	}
    });

    Pepper.Defenses.HP += Pepper.Level;


	return Pepper;
});


