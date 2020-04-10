define([
    'router',
    'scripts/routes'
],(Router, routes)=>{
    
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
            window.router = new Router({
                base_url : 'site/',
                start_page : 'home',
                content_holder_id : 'main-content',
                paths : routes
            });
            window.router.navigate();
        }
    }

    return initializer;
});
