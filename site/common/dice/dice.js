define([
    'lite'
    ,'dice'
], function (Lite) {

    return Lite.extend({
        content_url : 'site/common/dice/dice.html',
        onContentBound : function() {
            DiceRoller.init();// ew global
        }
    });
});