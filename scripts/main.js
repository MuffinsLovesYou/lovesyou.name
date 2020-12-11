import { lite } from './homerolled/lite.js';
import { routes } from './routes.js';

export function main() { 
    initializer.init();
}

let initializer = {
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
        window.lite = lite;
 
        lite.router = new lite.Router({
            paths : routes, 
            onHashChange : function(hash, filePath) {
                hash = hash.substr(1);
                if(!filePath) {
                    // Default path behavior if not found in routes: 
                        // #hash/url/path looks for file ../site/hash/url/path/path.js
                    filePath = hash + '/' + hash.split('/').slice(-1)[0] + '.js';
                }
                let route = '../site/' + filePath;

                import(route)
                    .then(page => {                        
                        new page.view().attach(document.getElementById('content'));
                    });
            }
        });

        window.onhashchange()
    }
}
    



