define([], ()=>{

    return {
        Name : 'Inventor'
        , Size : 'Small'
        , Type : 'humanoid (kobold)'
        , Alignment : 'lawful evil'
        , Speed : 20
        , Save : ''
        , Skill : ''
        , Senses : ''
        , Languages : 'Draconic, Common'
        , Challenge : '2' //ish
        , Defenses : { 
            Ac : '15 (chain shirt)',
            Hp : '44 (8d6+16)',
            Resist : `Acid.`,
            Immune : '',
            ConditionImmune : ''
        }
        , Stats : {
            Str : 10,
            Dex : 14, 
            Con : 14,
            Int : 8,
            Wis : 9, 
            Cha : 10
        }
        , Trait : [
            { Name : 'Pack Tactics', Text : `The kobold has advantage on an attack roll
against a creature if at least one of the kobold's allies is within
5 feet of the creature and the ally isn't incapacitated`}
        ]
        , Action : [
            { Name : 'Dagger', Text : `Melee Weapon Attack: +4 to hit, 5ft reach, one target. 
            Hit: 4 (d4+2) piercing damage`},
            { Name : 'Acid Flask 1/day', Text : `Ranged Weapon Attack +4 to hit, range 5/20ft, 
            one target. Hit: 7 (2d6) acid damage.` },
            { Name : 'Alchemist\'s Fire 1/day', Text : `Ranged Weapon Attack +4 to hit, range 5/20ft, 
            one target. Hit: 2 (1d4) fire damage at the start of each of the target's turns. A 
            creature can end this damage by using its action to make a DC 10 Dexterity check to 
            extinguish the flames. ` },
            { Name : 'Green Slime Pot 1/day', Text : `Ranged Weapon Attack +4 to hit, range 5/20, 
            one target. Hit: the target is covered in a patch of green slime. Miss: a patch of green 
            slime covers a randomly determined square within 5 feet of the target. 
            <br>A creature that comes into contact with green slime
            takes 5 (1d10) acid damage. The creature takes the
            damage again at the start of each of its turns until the
            slime is scraped off or destroyed. Against wood or
            metal, green slime deals 11 (2d10) acid damage each
            round , and any nonmagical wood or metal weapon or
            tool used to scrape off the slime is effectively destroyed.
            <br>Sunlight, any effect that cures disease , and any effect
            that deals cold, fire, or radiant damage destroys a patch
            of green slime.`},
            { Name : 'Rot Grub Pot 1/day', Text : `The kobold throws a clay pot into a 5-foot-square 
            space within 20 feet of it and it breaks on impact. A swarm of rot grubs emerges from the 
            shattered pot and remains a hazard in that square. `},
            { Name : 'Last Stand', Text : `The kobold charges at an enemy, smashing their pack 
            as they collide. Target makes a DC 12 dexterity saving throw. On fail: 7 (2d6) acid damage, 
            5 (1d10) ongoing acid damage (green slime). 1d4 rot grub infestations. On success: Half acid 
            damage, affected by green slime, no rot grubs. 
            <br>This attack expends all the inventor's attacks except alchemist's fire. The inventor 
            is affected and automatically fails their save. ` }
    
        ]
        , Reaction : [
            { Name : 'Formation Fighter', Text : `When a creature the kobold can see attacks a creature 
            other than the kobold that is within 5 feet of the kobold, the kobold can use its reaction to 
            impose disadvantage on the attack.` }
        ]
        , Legendary : []
        , Items : [
            { Name : 'Chain Shirt', Text : `x1`}
            , { Name : 'Dagger', Text : 'x1' }
        ]
    }
});