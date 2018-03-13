define([], function(){
    
    var Tiles = function(options = {}){
        var _tiles = this;
        _tiles.image_directory = options.image_directory || 'images/';
        _tiles.image_count = options.image_count || 10;

        _tiles.get_image = function(src){
            var rand = Math.floor(Math.random()*_tiles.image_count+1);
            var img = document.createElement('img');
            img.alt = '';
            img.src = src || _tiles.image_directory+('00'+rand).slice(-3)+'.png';
            return img;
        }
        _tiles.build_tile_html = function(tile_data){
            let tile = document.createElement('div');
            tile.className = 'tile';
            let img = tile.appendChild(_tiles.get_image(tile_data.src));
            let anch = tile.appendChild(document.createElement('a'));
            anch.href = tile_data.href || '#404';
            let title = anch.appendChild(document.createElement('h2'));
            title.innerText = tile_data.title || 'missing title';
            let content = anch.appendChild(document.createElement('div'));
            content.className = 'content';
            let alt = content.appendChild(document.createElement('p'));
            alt.innerText = tile_data.alt || '';
            return tile;
        }
        _tiles.fill = function(tile_list){
            if(!Array.isArray(tile_list)) return;
            let tiles_div = document.getElementById('tiles');
            tile_list.forEach((tile_data)=>{
                tiles_div.appendChild(_tiles.build_tile_html(tile_data));
            });
        }
        return _tiles;
    }

    return new Tiles({
        image_directory : 'images/',
        image_count : 15
    });
})


