define([
    'lovesyou_template'
    ,'elements/character-sheet'
], function (LYT, Character) {

    let template = new LYT();
    template.initialize = function(){
        let _this = this;
        _this.char = Character.new();
        _this.content = '<div id="char-container"></div>';
        let character = window.location.hash.split('/').pop();
        _this.data_url = '5e/char-sheets/'+character+'.js'; 
    }
    template.onContentBound = function(){
        let _this = this;
        _this.char.container = document.getElementById('char-container');
    }
    template.onDataBound = function(){
        let _this = this;
        _this.char.data = _this.data;
        _this.char.attach();
    }

    return template;
});


