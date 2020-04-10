define([
    'router',
    'lite',
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
                    '2017-notes' : 'dungeons-dragons/notes/2017'
                    ,'2018-notes' : 'dungeons-dragons/notes/2018'
                    ,'character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
                    ,'character' : 'dungeons-dragons/character-sheets/character-sheet'
                    ,'dice' : 'common/dice/dice'
                    ,'dungeonsdragons': 'dungeons-dragons/dungeons-dragons'
                    ,'encounter-builder' : 'dungeons-dragons/encounter-builder/encounter-builder'
                    ,'landing' : 'landing/landing'
                    ,'lookups' : 'dungeons-dragons/lookups/lookups'
                    ,'maps' : 'dungeons-dragons/maps/maps'
                    ,'monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
                    ,'notes' : 'dungeons-dragons/notes/notes'
                    ,'note' : 'dungeons-dragons/notes/note'
                    ,'places' : 'dungeons-dragons/notes/places/places'
                    ,'playtest' : 'dungeons-dragons/notes/play-test'
                    ,'programming' : 'programming/programming'
                    ,'recap-claw-mountain' : 'dungeons-dragons/notes/recap-claw-mountain/recap-claw-mountain' 
                    ,'spellbox' : 'dungeons-dragons/elements/spellbox/spellbox'
                    ,'timeline' : 'dungeons-dragons/notes/timeline/timeline'
                    ,'wild-magic': 'dungeons-dragons/wild-magic/wild-magic'

                    ,'code-pages' : 'programming/code-pages/'  
                    ,'code-pages-character' : code_path + 'character/character'
                    ,'code-pages-dice-roller' : code_path + 'dice-roller/dice-roller'
                    ,'code-pages-please' : code_path+'please/please'
                    ,'code-pages-lite' : code_path+'lite/lite'
                    ,'code-pages-gridify' : code_path+'gridify/gridify'
                }
            });
            window.router.navigate();
        }
    }

    return initializer;
});
