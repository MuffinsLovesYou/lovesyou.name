define([
    'lovesyou_util',
    'lovesyou_template', 
    'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'character-sheets.html';
    template.onContentBound = function () {
        tiles.fill([
            {title:"Pepper",href:"#character/pepper",alt:"dwarven cleric"},
            {title:"Darkness",href:"#character/darkness",alt:"masochistic crusader"},
            {title:"Maximilien",href:"#character/maximilien",alt:"weary veteran"},
            {title:"Barbican Brady",href:"#character/barbican-brady",alt:"champion of kord"},
            {title:"Law",href:"#character/law",alt:"hard hitting paladin."},
            {title:"Krismorel",href:"#character/krismorel",alt:"legendary elf paladin."},
            {title:"Lance of the Heavens",href:"#character/lance",alt:"holy arrows"}
        ]);  
    }

    
    return template;
});