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
            this.load_css();
        }
        , load_css : function() {
            var css = document.createElement("link");
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
        , onDataLoaded : function(data){
            let view = this;
            view.data = view.prepare_data(data);
            console.log('data', view.data);
        }
        , prepare_data : function(data) {
            let view = this;
            for(let k in data) {
                data[k[0].toUpperCase()+k.substr(1)] = data[k];
                delete data[k];
            }
            if(data.Action && !Array.isArray(data.Action))
                data.Action = [data.Action];
            if(data.Trait && !Array.isArray(data.Trait))
                data.Trait = [data.Trait];
            if(data.Reaction && !Array.isArray(data.Reaction))
                data.Reaction = [data.Reaction];

            data.Size = {
                T : 'Tiny', S : 'Small', M : 'Medium', 
                L : 'Large', H : 'Huge', G : 'Gargantuan'
            }[data.Size] || data.Size;
            view.format_spells(data);
            data = view.set_stats(data);
            return data;
        }
        , format_spells : function(data){
            if(!data.Trait) return;
            let spellcasting = data.Trait.find((trait)=>{
                return trait.name === 'Spellcasting'
            })
            if(!spellcasting) return;

            spellcasting.text = spellcasting.text.map((item, idx)=>{
                return idx ? item.substr(4) : item;
            })
            spellcasting.text = spellcasting.text.join('<br>');
        }
        , set_stats : function(data){
            let bonus = (x)=> x + '('+((x>=10)?'+':'') + Math.floor((+x-10)/2) +')'
            data.Str = bonus(data.Str)
            data.Dex = bonus(data.Dex);
            data.Con = bonus(data.Con);
            data.Int = bonus(data.Int);
            data.Wis = bonus(data.Wis);
            data.Cha = bonus(data.Cha);
            return data;
        }
        , onContentBound : function () {
            new tabs().stylize();
            let view = this;
            view.toggle_divs();
            view.build_traits();
            view.build_actions();
            view.build_reactions();
            view.build_legendary();
        }
        , toggle_divs : function() {
            let view = this;
            let data = view.data;
            let hide = (id)=>document.getElementById(id).parentElement.style.display = 'none'
            if(!data.Save) hide('Save');
            if(!data.Immune) hide('Immune');
            if(!data.ConditionImmune) hide('ConditionImmune')
            if(!data.Reaction) document.getElementById('monster-reactions').style.display = 'none'
            if(!data.Legend) document.getElementById('monster-legendary').style.display = 'none'    
        }
        , build_dynamic_item : function(name, text){
            let new_item = document.createElement('div');
            let label = new_item.appendChild(document.createElement('span'));
            let description = new_item.appendChild(document.createElement('span'));
            label.className = 'monster_grey_left';
            label.innerHTML = name + '. ';
            description.innerHTML = text;
            return new_item;
        }
        , build_traits : function() {
            let view = this;
            let traits = view.data.Trait;
            if(!traits) return;
            let traits_div = document.getElementById('monster-traits');
            traits.forEach((trait)=>{ 
                traits_div.appendChild(view.build_dynamic_item(trait.name, trait.text)) 
            });
        }
        , build_actions : function() {
            let view = this;
            let actions = view.data.Action;
            if(!actions) return;
            let actions_div = document.getElementById('monster-actions');
            actions.forEach((action)=>{
                if(Array.isArray(action.text)){
                    action.text = action.text.map((item, idx)=>{ 
                        if(!idx) return item;
                        item = item.split('.');
                        return '<b>'+item[0]+'.</b>'+item.slice(1).join('.');
                    });
                    action.text = action.text.join('<br>')
                }
                actions_div.appendChild(view.build_dynamic_item(action.name, action.text));
            });
        }
        , build_reactions : function() {
            let view = this;
            let reactions = view.data.Reaction;
            if(!reactions) return;
            let reactions_div = document.getElementById('monster-reactions');
            reactions.forEach((reaction)=>{
                reactions_div.appendChild(view.build_dynamic_item(reaction.name, reaction.text));
            });
        }
        , build_legendary : function() {
            let view = this;
            let legendary = view.data.Legendary;
            if(!legendary) return;
            let legendary_div = document.getElementById('monster-legendary');
            legendary.forEach((legend)=>{
                legendary_div.appendChild(view.build_dynamic_item(legend.name, legend.text));
            })
        }
    });
});