import { lite } from '../../../../scripts/homerolled/lite.js';
import { spells } from '../../../../5e/spells.js';

export let view = lite.extend({
    contentUrl : 'site/dungeons-dragons/elements/spellbox/spellbox.html'
    , initialize : function() {
        let view = this;
        if(!view.data) { view.data = view.loadSpell(); }
    }
    , loadSpell : function() {
        let spellName = window.location.hash.split('/').slice(1).join('/').replace(/%20/g, ' ');
        let spell = spells[spellName];
        return spell;
    }
});
export let SpellBox = view;