define(['scripts/vendor/marked'], (marked) => {

    // I started writing my own, then got annoyed and imported one.
    let markdown = {
        /* text: markdown formatted text to parser
        return: text with markdown converted to html */
        Parse: function (text) {

            return marked(text);
        },
        
    }


    return markdown;

})