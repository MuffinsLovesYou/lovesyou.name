
define([
	'5e/character.js'
],(Character)=>{

/*


    Bantam options: 
        Shadow monk: 
            To level 4: 
                Martial arts: 
                    d4 unarmed 
                    Flurry of blows (bonus) 
                    Dash, dodge defense (bonus)
                Spell-like abilities (2 ki each)
                    darkness, darkvision, pass without trade, silence
                4 ki points 
                +10 move speed
            To level 6: 
                d6 unarmed 
                +15 move
                6 ki points 
                extra attack
                shadow step (bonus)
            To Level 8: 
                8 ki points
                Evasion
                Stillness of mind

        Inquisitive rogue: 
            To level 4:
                Expertise, 
                2d6 sneak attack
                dodge/dash/hide (bonus)
                Take 7 on insight checks 
                Perceive hidden creatures (bonus) 
                Get sneak attack without advantage (bonus, lasts minute)
            To level 6: 
                Uncanny dodge (reaction)
                Expertise again 
                3d6 sneak
            To level 8: 
                Evasion 
                4d6 sneak

        Gloomstalker ranger:
            To level 4: 
                +1 ac w/ armor
                3 first level spells
                Ambusher 
                    + wis to initiative 
                    + 10 move speed first round 
                    + bonus attack when attacking on first round. Deals bonus d8
                Umbral sight: 
                    + Darkvision
                    + invisible in darkness 
            To level 6 (5 is fine): 
                extra attack 
                2nd level spells
            To level 8: 
                Proficiency wisdom saves

        Shadow sorcerer
            To level 4: 
                Darkvision 120 
                Darkness from sorcery points 
                1st and 2nd level spells (good utility)
                    Longstrider
                    Feather Fall
                    Mage Armor
                    Spider Climb
                    Enhance Ability

    Monk  
        1: Martial arts, unarmored agility
        2: Ki points, speed
        3: Spell like abilities 
        4: ABI
    Rogue 
        1: Expertise, Sneak Attack
        2: 
    Sorcerer


*/
    


	let TheBantam = new Character({
        Name : 'Rance Capon (The Bantam)',
        Race : 'Lightfoot Halfling',
        Alignment : 'Chaotic Good',
        Speed : 25,
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
            'Spellcasting' : `TheBantam is a 1st level spellcaster. Her spellcasting ability 
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

	
	return TheBantam;
});