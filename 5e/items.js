import { importedItems } from './imported/items.js';

export let items = {}
for(let k in importedItems)
    items[k] = importedItems[k];

