define([
    'lovesyou_util'
    ,'lite'
], function(util, Lite){

    let template = Lite.extend();
    template.content_url = 'site/dungeons-dragons/elements/monsterbox/tabs/stats.html'

    template.onDataBound = function(){
        let set = (id, val) => {
            let e = document.getElementById('monster_' + id)
            if(!val) e.parentElement.style.display = 'none';
            e.innerHTML = val;
        }
        let data = this.data;
        
        set('Name', data.name);
        set('Type', data.type);
        set('Size', data.size);
        set('Alignment', data.alignment);
        set('Speed', data.speed);
        set('CR', data.cr);
        set('Languages', data.languages);
        set('Senses', data.senses);
        set('condition_Immunities', data.conditionImmune);
        set('Immunities', data.immune);
        set('Skills', data.skill);
        
        set('Strength', data.str);
        set('Dexterity', data.dex);
        set('Constitution', data.con);
        set('Intelligence', data.int);
        set('Wisdom', data.wis);
        set('Charisma', data.cha);

        set('HP', data.hp);
        set('AC', data.ac);
        
        let saves = {};
        if(data.save){
        let sav = data.save.split(', ');
            console.log(sav);
            sav.forEach((s)=>{
                let sv = s.split(' ');
                saves[sv[0]]= sv[1];
            });
        }
        set('StrengthSave', saves.Str||'+0');
        set('DexteritySave', saves.Dex||'+0');
        set('ConstitutionSave', saves.Con||'+0');
        set('IntelligenceSave', saves.Int||'+0');
        set('WisdomSave', saves.Wis||'+0');
        set('CharismaSave', saves.Cha||'+0');
    }
    return template;
});