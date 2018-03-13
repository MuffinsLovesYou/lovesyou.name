define([
    'lovesyou_util',
    'lovesyou_template', 
    'tiles'
], function (util, LYT, tiles) {

    var template = new LYT();
    template.content_url = util.context+'character-sheets.html';
    template.onContentBound = function () {
        tiles.fill([
            {title:"Pepper",href:"#chars/pepper",alt:"dwarven cleric"},
            {title:"Darkness",href:"#chars/darkness",alt:"masochistic crusader"},
            {title:"Maximilien",href:"#chars/maximilien",alt:"weary veteran"},
            {title:"Barbican Brady",href:"#chars/barbican-brady",alt:"champion of kord"},
            {title:"Law",href:"#chars/law",alt:"hard hitting paladin."},
            {title:"Krismorel",href:"#chars/krismorel",alt:"legendary elf paladin."},
            {title:"Lance of the Heavens",href:"#chars/lance",alt:"holy arrows"}
        ]);  
    }

    
    return template;
});