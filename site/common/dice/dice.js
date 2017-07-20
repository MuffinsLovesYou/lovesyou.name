define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'dice'
], function (util, LYT) {

    var template = new LYT();
    template.content_url = 'site/common/dice/dice.html';
    template.onContentBound = function () {
        DiceRoller.init();
    } 
    return template;
    
});