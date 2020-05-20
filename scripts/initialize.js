import { Router } from './homerolled/router.js';
import { routes } from './routes.js';
//import { breadcrumb } from './homerolled/breadcrumb.js';


export let initializer = {
    init : function() {
        this.setTitle();
        this.initializeRouter();
    },
    setTitle : function() { 
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
    },
    initializeRouter : function() {
        window.router = new Router({
            paths : routes,
            onHashChange : function(hash, filePath) {
                let route = '../site/' + filePath;
                import(route)
                    .then(page => {
                        console.log('hit');
                        console.log(page);

                        new page.view().attach(document.getElementById('main-content'));
                    });
            }
        });
        window.onhashchange()
    }
}
    

