

export let customMonsters = {}
customMonsters.getMonster = function(monsterName, callback){
    import('./' + monsterName.toLowerCase() + '.js')
        .then(m => {
            callback(m.monster);
        });
}
