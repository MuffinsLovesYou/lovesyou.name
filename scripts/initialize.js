define([
    'router',
    'scripts/routes',
    'scripts/homerolled/breadcrumb'
],(Router, routes, breadcrumb)=>{
    
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
                paths : routes,
                onHashChange : function(hash, filePath) {
                    let route = 'site/' + filePath;
                    require([route], (lite)=> {
                        new lite().attach(document.getElementById('main-content'));
                    }); 

                    breadcrumb.set(hash, filePath);
                }
            });
            window.onhashchange()
            
        }
    }

    return initializer;
});
