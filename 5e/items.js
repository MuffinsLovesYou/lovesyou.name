define([
    '5e/imported/items'
], (imported_items)=>{

    let items = {

    }
    for(let k in imported_items)
        items[k] = imported_items[k];

    return items;
});