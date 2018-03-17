define([
    'lite'
], function(Lite){

    return Lite.extend({
        content_url : 'site/dungeons-dragons/elements/monsterbox/tabs/stats.html'
        , onDataLoaded : function(data){
            data.saves = { Str : '+0', Dex : '+0', Con : '+0', Int : '+0', Wis : '+0', Cha : '+0' };
            data.save.split(', ').forEach(s=>{ data.saves[s.substr(0,3)] = s.substr(4)});
        }
    });
});