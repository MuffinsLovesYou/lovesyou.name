define(['scripts/vendor/marked'], (marked) => {
    // Wrapper for imported markdown parser
    let markdown = {
        /* text: markdown formatted text to parser
        return: text with markdown converted to html */
        Parse: function (text) {
            return marked(text);
        },
        
    }
    return markdown;
})