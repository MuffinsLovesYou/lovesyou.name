define([
    '5e/custom_monsters/bockle',
    '5e/custom_monsters/kathuil',
    '5e/custom_monsters/kheinan',
    '5e/custom_monsters/krismorel',
    '5e/custom_monsters/lantern wisp',
    '5e/custom_monsters/rinarv'
],(bockle,kathuil,kheinan,krismorel, lantern_wisp, rinarv)=>{

let monsters = {}
// need to make this conditional on request 
monsters.Bockle = bockle;
monsters.Kathuil = kathuil;
monsters.Kheinan = kheinan;
monsters.Krismorel = krismorel;
monsters['Lantern Wisp'] = lantern_wisp;
monsters.Rinarv = rinarv;

return monsters;

});