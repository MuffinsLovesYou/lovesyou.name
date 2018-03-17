define([
    'lite'
    ,'5e/monsters'
    ,'site/dungeons-dragons/elements/monsterbox/tabs/stats'
    ,'lovesyou_table'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
    ,'site/common/modal/modal'
    ,'scripts/homerolled/lovesyou_tabs'
], function (Lite, monsters, stats, tbl, spellbox, spells, modal, tabs) {

   
    return Lite.extend({
        content_url : 'site/dungeons-dragons/elements/monsterbox/monsterbox.html'
        , initialize : function() {
            let monster = window.location.hash.split('/').pop().replace(/%20/g,' ');
            this.data = monsters[monster];
        }
        , onContentBound : function () {
            new tabs().stylize();
        }
        , onDataBound : function () {
            let view = this;
            let data = view.data;
            console.log(data)
            new stats({
                container : document.getElementById('stats_container')
                , data : view.data
            }).attach();
            console.log('wert')

            view.objectToHtml(data.trait , document.getElementById('traits_container'))
            view.objectToHtml(data.action, document.getElementById('actions_container'));
            
            if(data.spells)
                view.spells_tab(data);
            else
                document.getElementById('monster_spells_tab').style.display = 'none';
        
        }
        // This was a quick-to-market hack, lets do it a lot cleaner. 
        , objectToHtml : function(obj, container) {   
            let dv = document.createElement('div');
            if (Array.isArray(obj)){
                let ul = document.createElement('ul');
                obj.forEach((e,i)=>{
                    let li = document.createElement('li');
                    if(typeof(e)!=='object')
                        li.innerHTML = e;
                    else 
                        objectToHtml(e, li);
                    ul.appendChild(li);
                });
                dv.appendChild(ul);
            }
            else if (typeof(obj)==='object'){
                for(let p in obj){
                    let dv2 = document.createElement('div');
                    let spkey = document.createElement('span');
                    spkey.innerHTML = p+': ';
                    spkey.style.minWidth = '90px';
                    spkey.style.display ='inline-block'
                    spkey.style.fontWeight = 'bold';
                    dv2.appendChild(spkey);
                    
                    let val = obj[p];
                    if(typeof(val)!=='object'){
                        let spval = document.createElement('span');
                        spval.innerHTML = val;
                        dv2.appendChild(spval);
                    }
                    else 
                        objectToHtml(val, dv2);
                    dv.appendChild(dv2);
                }
            }
            container.appendChild(dv);
        } 
        , spells_tab : function(data){
            let _dspells = data.spells.split(', ');
            for(let s in spells){
                spells[s.toLowerCase()] = spells[s];
            }
            let _spells = [];
            _dspells.forEach((s)=>{
                _spells.push(spells[s]);
            });
            let spells_table = new tbl({
                container : document.getElementById('spells_container'),
                data : _spells,
                columns : [
                    { 
                        field : 'Name', 
                        style : 'text-align:left; text-decoration:underline',
                        sort : true,
                        click: (e)=>{ 
                            new modal({
                                onContentBound : function(){
                                    new spellbox({
                                        data : _spells[e.target.innerHTML]
                                        , container : document.getElementById('spellbox_container')
                                    }).attach();
                                }
                            })
                            /*let _spell = spells[e.target.innerHTML];
                            let _modal = modal.new();
                            _modal.onContentBound = ()=>{
                                let _spellbox = spellbox.new();
                                _spellbox.data = _spell;
                                _spellbox.container = document.getElementById('modal-content');
                                _spellbox.attach();
                            }
                            _modal.container = document.getElementById('spellbox_container');
                            _modal.attach();*/
                        } 
                    },
                    { field : 'Level', sort:true },
                    { field : 'Casting Time', style : 'max-width:300px; text-align:left' },
                    { field : 'Range' },
                    { field : 'Duration' } 
                ],
            });
            spells_table.draw();
        }
    });
});