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
                paths : routes,
                onHashChange : function(filePath) {
                    let route = 'site/' + filePath;
                    require([route], (lite)=> {
                        new lite().attach(document.getElementById('main-content'));
                    }); 
                }
            });
            location.hash = '#home'
            //window.router.navigate();

            
/*        _router.onNavigate = function(hash) { 
            _router.setBootstrapBreadcrumb(hash);
        }

        _router.setBootstrapBreadcrumb = function(hash) { 
            let breadCrumb = document.getElementById('bootstrap-breadcrumb');
            if(!breadCrumb) { return; }
            while(breadCrumb.children.length > 0) { breadCrumb.removeChild(breadCrumb.firstChild); }

            let createLink = function(text, href, active) {
                let li = document.createElement('li');
                li.className = 'breadcrumb-item';

                let anchor = document.createElement('a');
                anchor.href = href;//'#' + paths.slice(0, i + 1).join('/');
                anchor.innerHTML = text;//(i===0) ? 'home' : p;
                li.appendChild(anchor);

                if(active) {
                    li.className = 'breadcrumb-item active';
                    li.setAttribute('aria-current', 'page');
                }
                return li;
            }

            breadCrumb.appendChild(createLink('home', '#', false));
            if(hash == ["home"]) { return; }

            let paths = hash.split('/');
            paths.forEach((p, i) => {
                let text = p;
                let href = '#' + paths.slice(0, i+1).join('/');
                let active = (i == paths.length-1);
                let li = createLink(text, href, active);

                breadCrumb.appendChild(li);
            });

        }*/
        }
    }

    return initializer;
});
