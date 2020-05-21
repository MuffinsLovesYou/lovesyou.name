import {} from '../vendor/marked.js';

// Wrapper for imported markdown parser
export let markdown = {
    /* text: markdown formatted text to parser
    return: text with markdown converted to html */
    parse: function (text) {
        return marked(text);
    }    
}