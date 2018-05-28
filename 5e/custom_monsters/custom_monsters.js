define([
    '5e/custom_monsters/bockle',
    '5e/custom_monsters/kathuil',
    '5e/custom_monsters/krismorel'
],(bockle,kathuil,krismorel)=>{

let monsters = {}
// need to make this conditional on request 
monsters.Bockle = bockle;
monsters.Kathuil = kathuil;
monsters.Krismorel = krismorel;

return monsters;

});