define([
    '5e/custom_monsters/bockle',
    '5e/custom_monsters/the flayer',
    '5e/custom_monsters/kathuil',
    '5e/custom_monsters/kheinan',
    '5e/custom_monsters/krismorel',
    '5e/custom_monsters/lantern wisp',
    '5e/custom_monsters/rinarv',
    '5e/custom_monsters/warlock of the fiend'
],(bockle, the_flayer, kathuil,kheinan,krismorel, lantern_wisp, rinarv,
warlock_of_the_fiend)=>{

let monsters = {}
// need to make this conditional on request 
monsters.Bockle = bockle;
monsters['The Flayer'] = the_flayer;
monsters.Kathuil = kathuil;
monsters.Kheinan = kheinan;
monsters.Krismorel = krismorel;
monsters['Lantern Wisp'] = lantern_wisp;
monsters.Rinarv = rinarv;
monsters['Warlock of the Fiend'] = warlock_of_the_fiend;

return monsters;

});