
export let monster = {
    Name : 'Swarm of Rot Grubs'
    , Size : 'Medium swarm of tiny'
    , Type : 'beast'
    , Alignment : 'unaligned'
    , Speed : '5ft, climb 5ft'
    , Save : ''
    , Skill : ''
    , Senses : 'blindsight 10ft'
    , Languages : ''
    , Challenge : ''
    , Defenses : { 
        Ac : '8',
        Hp : '22 (5d8)',
        Resist : 'piercing, slashing',
        Immune : '',
        ConditionImmune : 'charmed, frightened, grappled, paralyzed, prone, petrified, restrained'
    }
    , Stats : {
        Str : 2,
        Dex : 7, 
        Con : 10,
        Int : 1,
        Wis : 2, 
        Cha : 1
    }
    , Trait : [
        { Name : 'Swarm', Text : `The swarm can occupy another creature's space and
        vice versa, and the swarm can move through any opening large
        enough for a Tiny maggot. The swarm can't regain hit points or
        gain temporary hit points`}
    ]
    , Action : [
        { Name : 'Bites', Text : `Bites. Melee Weapon Attack: +0 to hit, reach 0ft, one creature
        in the swarm's space. Hit : The target is infested by 1d4 rot
        grubs. At the start of each of the target's turns , the target takes
        ld6 piercing damage per rot grub infesting it. Applying fire to
        the bite wound before the end of the target's next turn deals
        1 fire damage to the target and kills these rot grubs . After this
        time, these rot grubs are too far under the skin to be burned.
        If a target infested by rot grubs ends its turn with 0 hit points,
        it dies as the rot grubs burrow into its heart and kill it. Any
        effect that cures disease kills all rot grubs infesting the target.`}
    ]
    , Reaction : []
    , Legendary : []
    , Items : []
}


