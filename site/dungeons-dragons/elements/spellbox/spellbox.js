import { lite } from '../../../../scripts/homerolled/lite.js';
import { spells } from '../../../../5e/spells.js';

export let SpellBox = lite.extend({
    contentUrl : 'site/dungeons-dragons/elements/spellbox/spellbox.html'
    , initialize : function() {
        let view = this;
        if(!view.data) view.data = view.load_spell();
    }
    , load_spell : function(){
        let spell_name = window.location.hash.split('/').slice(1).join('/').replace(/%20/g, ' ');
        let spell = spells[spell_name];
        return spell;
    }
});