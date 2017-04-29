define([
    'colorizer'
], (colorizer) => {
    colorizer.load();

    let LYRouter = function () {
        let router = this;
        router.baseUrl = 'site/';
        router.paths = {
            base : 'site/'
            ,sheets :'dungeons-dragons/character-sheets/sheets/'
            ,code : 'programming/code-pages/'
        }
        router.map = {
            'landing' : 'landing/landing'
            ,'dungeonsdragons': 'dungeons-dragons/dungeons-dragons'
            ,'notes' : 'dungeons-dragons/notes/notes'
            ,'note' : 'dungeons-dragons/notes/note'
            ,'maps' : 'dungeons-dragons/maps/maps'
            ,'monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
            ,'character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
            ,'programming' : 'programming/programming'
            /* */
            ,'code-pages/character' : router.paths.code + 'character/character'
            ,'code-pages/dice-roller' : router.paths.code + 'dice-roller/dice-roller'
            ,'code-pages/lua-actions' : router.paths.code + 'lua-actions/lua-actions'
            ,'code-pages/lua-textiles' : router.paths.code + 'lua-textiles/lua-textiles'
            ,'code-pages/lua-textilesv2' : router.paths.code + 'lua-textilesv2/lua-textilesv2'
            ,'code-pages/lvlr' : router.paths.code + 'lvlr/lvlr'
            ,'code-pages/lovesyou.name' : router.paths.code + 'lovesyou.name/lovesyou.name'

            /* */
            ,'maximilien' : router.paths.sheets + 'maximilien-robert'
            ,'barbican-brady' : router.paths.sheets + 'barbican-brady'
            ,'law' : router.paths.sheets + 'law'
        }
        router.main_content = document.getElementById('main-content');

        router.clean_url = function () {
            try {
                let url = window.location.toString();
                url = url.replace('.html', '');
                window.history.replaceState(null, null, url);
            } catch (e) { /*fails on local browser during dev*/ }
        }
        router.navigate = function () {
            router.clean_url();
            colorizer.on_navigate();
            let key = window.location.hash.slice(1).toLowerCase();
            if(!key){ key = 'landing'; }
            if(key.substr(0,6)==='notes/'){ key = 'note'; }
            if(key.substr(0,10)==='monsterbox'){ key = 'monsterbox'; }
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