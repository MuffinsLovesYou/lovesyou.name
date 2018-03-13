define([
    'colorizer'
], (colorizer) => {
    colorizer.load();

    let LYR = function () {
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
            ,'lookups' : 'dungeons-dragons/lookups/lookups'
            ,'notes' : 'dungeons-dragons/notes/notes'
            ,'note' : 'dungeons-dragons/notes/note'
            ,'maps' : 'dungeons-dragons/maps/maps'
            ,'monsterbox' : 'dungeons-dragons/elements/monsterbox/monsterbox'
            ,'character-sheets' : 'dungeons-dragons/character-sheets/character-sheets'
            ,'character-sheet' : 'dungeons-dragons/character-sheets/character-sheet'
            ,'programming' : 'programming/programming'
            ,'test' : 'test/test'
            /* */
            ,'code-pages/character' : router.paths.code + 'character/character'
            ,'code-pages/dice-roller' : router.paths.code + 'dice-roller/dice-roller'
            ,'code-pages/lua-actions' : router.paths.code + 'lua-actions/lua-actions'
            ,'code-pages/lua-textiles' : router.paths.code + 'lua-textiles/lua-textiles'
            ,'code-pages/lua-textilesv2' : router.paths.code + 'lua-textilesv2/lua-textilesv2'
            ,'code-pages/lvlr' : router.paths.code + 'lvlr/lvlr'
            ,'code-pages/lovesyou.name' : router.paths.code + 'lovesyou.name/lovesyou.name'

        }
        router.main_content = document.getElementById('main-content');

        router.clean_url = function () {
            try {
                let url = window.location.toString()
                    .replace('.html', '');
                window.history.replaceState(null, null, url);
            } catch (e) { /*fails on local browser during dev*/ }
        }
        router.navigate = function () {
            router.clean_url();
            colorizer.on_navigate();
            let key = window.location.hash.slice(1).toLowerCase();
            if(!key){ key = 'landing'; }
            if(key.substr(0,6)==='notes/'){ key = 'note'; }
            else if (key.substr(0,6)==='chars/') { key = 'character-sheet'; }
            else if(key.substr(0,10)==='monsterbox'){ key = 'monsterbox'; }
            if (!router.map[key]) return;
            let route = router.baseUrl + router.map[key];
            require([route], function (template) {
                template = template.new();
                template.container = router.main_content;
                template.attach();
            });
        }

        return router;
    }
    let router = new LYR();
    window.onhashchange = router.navigate;
    router.navigate();
    return router;
});