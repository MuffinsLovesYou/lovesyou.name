
export let Tiles = function(options = {}){
    let _tiles = this;
    _tiles.imageDirectory = options.imageDirectory || 'images/';
    _tiles.imageCount = options.imageCount || 15;
    _tiles.container = options.container;

    _tiles.Tile = function(tileData) {
        let tile = document.createElement('div');
        tile.className = 'tile col';

        tile.appendChild(_tiles.getImage(tileData.src));
        
        let anchor = tile.appendChild(document.createElement('a'));
        anchor.href = tileData.href || '#404';

        let title = anchor.appendChild(document.createElement('h2'));
        title.innerText = tileData.title || 'missing title';

        let content = anchor.appendChild(document.createElement('div'));
        content.className = 'tile-content';

        let alt = content.appendChild(document.createElement('p'));
        alt.innerText = tileData.alt || '';

        return tile;
    }

    _tiles.getRow = function() { 
        let div = document.createElement('div');
        div.className = 'row row-cols-3';
        return div;
    }

    _tiles.getImage = function(src){
        let rand = Math.floor(Math.random() * _tiles.imageCount + 1);
        let img = document.createElement('img');
        img.alt = '';
        img.src = src || _tiles.imageDirectory+('00'+rand).slice(-3)+'.png';
        return img;
    }

    _tiles.fill = function(container = _tiles.container, tiles){
        if(!container instanceof HTMLElement) { throw`tiles.fill requires a valid html element for a container`; }
        if(!Array.isArray(tiles)) { throw`tiles.fill requires an array of tile data`; }
        
        let row = _tiles.getRow();
        tiles.forEach((tileData) => {
            row.appendChild(_tiles.Tile(tileData));
        });
        container.appendChild(row);
    }
    return _tiles;
}