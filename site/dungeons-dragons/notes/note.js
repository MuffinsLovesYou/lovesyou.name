import { lite } from '../../../scripts/homerolled/lite.js';
import { markdown } from '../../../scripts/homerolled/markdown-parser.js';


export let view = lite.extend({
    initialize : function() {
        this.contentUrl = this.getContentUrl();  
    }
    , getContentUrl : function() { 
        let hash = location.hash;
        if(hash.indexOf('path') > -1){
            return '5e/notes/' + hash.substr(hash.indexOf('path') + 5) + '.md';
        }
        else {
            return '5e/notes/' + hash.split('/').slice(2).join('/') + '.md';
        }
    }
    , onContentLoaded : function(content){
        let markup = markdown.parse(content);
        this.content = `
            <div><a href='https://www.dandwiki.com/wiki/5e_SRD:Monsters' target='_blank'>Monsters</a>
            <a href='http://npcgenerator.azurewebsites.net/' target='_blank'>NPC generator</a></div>
            ` + markup;
    }
});
