define([
    'lite'
    ,'5e/monsters'
    ,'site/common/modal/modal'
], function (Lite, monsters, modal) {

    return Lite.extend({
        content_url : 'site/dungeons-dragons/elements/monsterbox/monsterbox.html'
        , initialize : function() {
            let monster = window.location.hash.split('/').pop().replace(/%20/g,' ');
            if(!this.data) this.data = monsters[monster];
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
        , onDataLoaded : function(data){}
        , format_spells : function(data){
            if(!data.Trait) return;
            let spellcasting = data.Trait.find((trait)=>{
                return trait.Name === 'Spellcasting'
            });
            if(!spellcasting) return;
            spellcasting.Text = spellcasting.Text.replace(/â€¢/g, '');
        }
        , onContentBound : function () {
            let view = this;
            view.toggle_divs();
            view.format_spells(view.data);
            view.build_traits();
            view.build_actions();
            view.build_reactions();
            view.build_legendary();
            view.build_items();
        }
        , toggle_divs : function() {
            let view = this;
            let data = view.data;
            let hide = (id)=>view.container.querySelector('#'+id).parentElement.style.display = 'none'
            if(!data.Languages) hide('Languages');
            if(!data.Save) hide('Save');
            if(!data.Senses) hide('Senses')
            if(!data.Immune) hide('Immune');
            if(!data.ConditionImmune) hide('ConditionImmune')
            if(!data.Reaction.length) view.container.querySelector('#monster-reactions').style.display = 'none'
            if(!data.Legendary.length) view.container.querySelector('#monster-legendary').style.display = 'none' 
            if(!data.Items) view.container.querySelector('#monster-items').style.display = 'none'  
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
            let traits_div = view.container.querySelector('#monster-traits');
            traits.forEach((trait)=>{ 
                traits_div.appendChild(view.build_dynamic_item(trait.Name, trait.Text)) 
            });
        }
        , build_actions : function() {
            let view = this;
            window.view = view;
            let actions = view.data.Actions;
            if(!actions) return;
            let actions_div = view.container.querySelector('#monster-actions');
            actions.forEach((action)=>{
                if(Array.isArray(action.text)){
                    action.text = action.text.map((item, idx)=>{ 
                        if(!idx) return item;
                        item = item.split('.');
                        return '<b>'+item[0]+'.</b>'+item.slice(1).join('.');
                    });
                    action.text = action.text.join('<br>')
                }
                actions_div.appendChild(view.build_dynamic_item(action.Name, action.Text));
            });
        }
        , build_reactions : function() {
            let view = this;
            let reactions = view.data.Reaction;
            if(!reactions.length) return;
            let reactions_div = view.container.querySelector('#monster-reactions');
            reactions.forEach((reaction)=>{
                reactions_div.appendChild(view.build_dynamic_item(reaction.Name, reaction.Text));
            });
        }
        , build_legendary : function() {
            let view = this;
            let legendary = view.data.Legendary;
            if(!legendary) return;
            let legendary_div = view.container.querySelector('#monster-legendary');
            legendary.forEach((legend)=>{
                legendary_div.appendChild(view.build_dynamic_item(legend.Name, legend.Text));
            })
        }
        , build_items : function() {
            let view = this;
            let items = view.data.Items;
            if(!items) return;
            let items_div = view.container.querySelector('#monster-items');
            items.forEach((item)=>{
                items_div.appendChild(view.build_dynamic_item(item.Name, item.Text));
            });
        }
    });
});