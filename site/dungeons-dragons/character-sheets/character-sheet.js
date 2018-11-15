define([
    'lite'
    ,'xhr'
    ,'scripts/homerolled/gridify'
    ,'site/dungeons-dragons/character-sheets/tabs/main'
    ,'site/common/modal/modal'
    ,'site/dungeons-dragons/elements/spellbox/spellbox'
    ,'5e/spells'
    ,'scripts/homerolled/markdown-parser'
], function (Lite, xhr, gridify, MainTab, modal, spellbox, spells, md) {
    
    return Lite.extend({
        content_url : 'site/dungeons-dragons/character-sheets/character-sheet.html',
        onContentBound : function () {
            require(['scripts/homerolled/character-sheet-styler'], (sheet_styler) => {
                sheet_styler.stylize();
            });

            require(['site/common/dice/dice'], (dice) => {
                new dice().attach(document.getElementById('dice-container'));
            });
        }
        , initialize : function() {
            this.data_url = '5e/char-sheets/'+window.location.hash.split('/').splice(-1)+'.js'
            
            this.load_css();
        }
        , load_css : function() {
            let css = document.createElement("link");
            css.rel = "stylesheet";
            css.type = "text/css";
            css.href = 'css/homerolled/dnd.css';
            let head = document.getElementsByTagName('head')[0];
            let links = document.getElementsByTagName('link');
            let has = Array.from(links).some((link)=>{
                return link.href === css.href;
            });
            if(!has) head.appendChild(css);            
        }
        , onDataBound : function (data) {
            let view = this;
            view.main_tab(data);
            view.background_tab(data);
            view.notes_tab();
            view.skills_tab(data);
            view.items_tab(data);
            view.spells_tab(data);
        }
        , main_tab : function(data){
            new MainTab({
                data : data, // might wanna make data binding more obvious 
                container : document.getElementById('character_main')
            }).attach();
        }
        , notes_tab : function(){
            let view = this;
            var notes_container = view.container.querySelector('#character_notes');
            let x = new Lite.extend({
                container : notes_container,
                content : `<div id='notes'></div>`,
                data_url : '5e/notes/char-notes/'+window.location.hash.split('/').splice(-1)+'.md',
                onDataLoaded : function(data){
                    this.data = md.Parse(data);
                },
                onDataBound : function(){
                    this.container.querySelector('#notes').innerHTML += this.data;
                }
            });
            new x().attach();
        }
        , skills_tab : function(data){
            window.data = data;
            let _skills = [];
            for(let s in data.Skills) _skills.push(data.Skills[s]);

            gridify('skills_container').initialize({
                data : _skills,
                columns : [
                    { field : 'Name', style : 'text-align:left', sort:true },
                    { field : 'Ability', sort:true },
                    { field : 'Trained', format : (x)=>{ return x?'Yes':'No'; }, sort:true },
                    { field : 'Bonus', style : 'text-align:right', sort:true}
                ],
            });
        }
        , background_tab : function(data){
            let background = this.container.querySelector('#character_background');
            if(data.Background === null) 
                this.container.querySelector('#background_tab').style.display = 'none';
            var background_md = '';
            for(let b in data.Background)
                background_md += '* **' + b + '**: ' + data.Background[b] + '  \n';
            background_md = md.Parse(background_md);
            background.innerHTML = background_md;
        }
        , items_tab : function(data) {
            let _items = [];
            for(let i in data.Items) {
                if(typeof(data.Items[i])!=='object') continue;
                _items.push(data.Items[i]);
            }
            gridify('items_container').initialize({
                data : _items,
                columns : [
                    { field : 'Name', style : 'text-align:left', sort:true },
                    { field : 'Count', style : 'text-align:right' },
                    { field : 'Value', sort:true },
                    { field : 'Weight', style : 'text-align:right', sort:true }
                ],
            });
            let totalWeight = _items.reduce((acc, item)=>{ return (acc+=(item.Weight||0)); }, 0);
            let lblItems = document.getElementById('label-items');
            lblItems.innerHTML = lblItems.innerHTML + ' ' + totalWeight + '/' + data.CarryWeight;
        }
        , spells_tab : function(data) {
            let _spells = [];
            for(let s in data.Spells) {
                if(typeof(data.Spells[s])!=='object') continue;
                _spells.push(data.Spells[s]);
            }
            gridify('spells_container').initialize({
                data : _spells,
                columns : [
                    { 
                        field : 'Name', 
                        style : 'text-align:left; text-decoration:underline',
                        sort : true,
                        click: (e)=>{ 
                            let _spell = spells[e.target.innerHTML];
                            new modal({
                                onDataBound : function(){
                                    new spellbox({
                                        data : _spell,
                                        container : document.getElementById('modal-content'),
                                    }).attach();
                                }
                            }).attach();
                        } 
                    },
                    { field : 'Level', sort:true },
                    { field : 'CastingTime', style : 'max-width:300px; text-align:left' },
                    { field : 'Range' },
                    { field : 'Duration' } 
                ],
            });
            if(_spells.length===0) document.getElementById('spells_tab').style.display = 'none';    
        }
    });

});