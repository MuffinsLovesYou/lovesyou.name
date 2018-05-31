define([
    '5e/custom_monsters/bockle',
    '5e/custom_monsters/kathuil',
    '5e/custom_monsters/krismorel',
    '5e/custom_monsters/lantern wisp'
],(bockle,kathuil,krismorel, lantern_wisp)=>{

let monsters = {}
// need to make this conditional on request 
monsters.Bockle = bockle;
monsters.Kathuil = kathuil;
monsters.Krismorel = krismorel;
monsters['Lantern Wisp'] = lantern_wisp;

return monsters;

});