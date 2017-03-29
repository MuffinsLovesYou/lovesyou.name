define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'dice'
], function (util, LYTemplate) {

    
    var template = new LYTemplate();
    template.ContentUrl = 'site/common/dice/dice.html';
    template.OnAttach = function () {
        DiceRoller.init();
    } 

    return template;
});