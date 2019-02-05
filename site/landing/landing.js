define([
    'lite', 
    'tiles'
], function (lite, tiles) {
    

    return lite.extend({
        content_url : 'site/landing/landing.html',
        onContentBound : function(){
            tiles.fill([
                { title : 'programming', alt : 'samples and experiments', href : '#Programming' }
                , { title : 'dungeons and dragons', alt : 'characters, notes', href : '#DungeonsDragons' }
            ]);      
        }
    });
});