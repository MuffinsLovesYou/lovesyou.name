define([
    'lite', 
    'scripts/homerolled/tiles'
], function (lite, Tiles) {
    
    return lite.extend({
        content_url : 'site/landing/landing.html',
        onContentBound : function() {
            new Tiles().fill(document.getElementById('tile-container'), [
                { title : 'programming', alt : 'samples and experiments', href : '#Programming' }
                , { title : 'dungeons and dragons', alt : 'characters, notes', href : '#DungeonsDragons' }
            ]);      
        }
    });
    
});