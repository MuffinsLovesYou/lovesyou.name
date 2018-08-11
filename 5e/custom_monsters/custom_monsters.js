define([
],()=>{


let custom = {}
custom.get_monster = function(monster_name, callback){
    require(['5e/custom_monsters/'+monster_name.toLowerCase()], (monster_data)=>{
        callback(monster_data);
    });
}
return custom;
});