
define([], function(){
    console.log('loading tiles');

    var Tiles = function(){
        var tiles = this;

        tiles.image_directory = 'images/';
        tiles.image_count = 15;

        tiles.get_image = function(){
            var ran = Math.floor(Math.random()*tiles.image_count+1);
            var img = document.createElement('img');
            img.alt = '';
            img.src = tiles.image_directory+('00'+ran).substring((ran+'').length+2-3)+'.png';
            return img;
        }
        tiles.decorate = function() {
            let tile_list = document.getElementsByClassName('tile');
            for(let i = 0; i < tile_list.length; i++){
                let tile = tile_list[i];
                
                let tile_img = tile.getElementsByTagName('img')[0];
                let img = tiles.get_image();
                if(tile_img){
                    tile_img.src = img.src;
                }
                else {
                    tile.appendChild(img);
                }
            }
        }
        window.tile = tiles;
        return tiles;
    }


    return new Tiles();

})


