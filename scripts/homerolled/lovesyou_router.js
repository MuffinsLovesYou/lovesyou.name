define([
    'colorizer'
], (colorizer) => {
    colorizer.load();
    console.log('loading lovesyou_router');

    let LYRouter = function () {
        let router = this;
        router.baseUrl = 'site/';
        router.map = {
            'landing' : 'landing/landing'
            ,'dungeonsdragons': 'dungeons-dragons/dungeons-dragons'
            ,'character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
            ,'programming' : 'programming/programming'
            /* */
            ,'code-pages/character' : 'programming/code-pages/character/character'
            ,'code-pages/dice-roller' : 'programming/code-pages/dice-roller/dice-roller'
            ,'code-pages/lua-actions' : 'programming/code-pages/lua-actions/lua-actions'
            ,'code-pages/lua-textiles' : 'programming/code-pages/lua-textiles/lua-textiles'
            ,'code-pages/lua-textilesv2' : 'programming/code-pages/lua-textilesv2/lua-textilesv2'
            ,'code-pages/lvlr' : 'programming/code-pages/lvlr/lvlr'
            ,'code-pages/lovesyou.name' : 'programming/code-pages/lovesyou.name/lovesyou.name'

            /* */
            ,'maximilien' : 'dungeons-dragons/character-sheets/sheets/maximilien-robert'
            ,'barbican-brady' : 'dungeons-dragons/character-sheets/sheets/barbican-brady'
            ,'law' :'dungeons-dragons/character-sheets/sheets/law'
        }
        router.main_content = document.getElementById('main-content');

        router.clean_url = function () {
            try {
                let url = window.location.toString();
                url = url.replace('.html', '');
                window.history.replaceState(null, null, url);
            } catch (e) { }
        }
        router.navigate = function () {
            router.clean_url();
            colorizer.on_navigate();
            let key = window.location.hash.slice(1).toLowerCase();
            if(!key){ key = 'landing'; }
            if (!router.map[key]) {
                return;
            }
            let route = router.baseUrl + router.map[key];
            require([route], function (template) {
                template.Container = router.main_content;
            });
        }

        return router;
    }
    let router = new LYRouter();

    window.onhashchange = router.navigate;

    router.navigate();

    return router;

});