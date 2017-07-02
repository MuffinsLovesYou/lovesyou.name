define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'dice'
], function (util, LYTemplate) {

    var template = new LYTemplate();
    template.content_url = 'site/common/dice/dice.html';
    template.onContentBound = function () {
        DiceRoller.init();
    } 
    return template;
    
});