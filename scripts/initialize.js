define([
    'router',
    'lite',
	'tiles'
],(Router)=>{
    
    let initializer = {
        init : function(){
            initializer.set_title();
            initializer.initialize_router();
        }
        , set_title : function() {
            let emojis = [
                "\\ \\ \\٩(｡•ㅅ•｡)و/ / /"
                ,"(ﾉ･ｪ･)ﾉ"
                ,"(ﾉ^∇^)ﾉﾟ"
                ,"ヾ(￣◇￣)ノ"
                ,"(°◡°♡).:｡"
                ,"(︶｡︶✽)"
                ,"(￣(エ)￣)ゞ"
            ];
            document.title = emojis[Math.floor(Math.random()*emojis.length)];   
        }
        , initialize_router : function() {
            let code_path = 'programming/code-pages/'
            window.router = new Router({
                base_url : 'site/',
                start_page : 'landing',
                content_holder_id : 'main-content',
                paths : {
                    'landing' : 'landing/landing'
                    ,'dungeonsdragons': 'dungeons-dragons/dungeons-dragons'
                    ,'lookups' : 'dungeons-dragons/lookups/lookups'
                    ,'notes' : 'dungeons-dragons/notes/notes'
                    ,'note' : 'dungeons-dragons/notes/note'
                    ,'maps' : 'dungeons-dragons/maps/maps'
                    ,'monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
                    ,'character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
                    ,'character' : 'dungeons-dragons/character-sheets/character-sheet'
                    ,'programming' : 'programming/programming'
                    ,'test' : 'test/test'

                    ,'code-pages' : 'programming/code-pages/'  
                    ,'code-pages-character' : code_path + 'character/character'
                    ,'code-pages-dice-roller' : code_path + 'dice-roller/dice-roller'
                    ,'code-pages-lua-actions' : code_path + 'lua-actions/lua-actions'
                    ,'code-pages-lua-textiles' : code_path + 'lua-textiles/lua-textiles'
                    ,'code-pages-lua-textilesv2' : code_path + 'lua-textilesv2/lua-textilesv2'
                    ,'code-pages-lvlr' : code_path + 'lvlr/lvlr'
                    ,'code-pages-lovesyou.name' : code_path + 'lovesyou.name/lovesyou.name'

                }
            });
            window.router.navigate();
        }
    }

    return initializer;
});
