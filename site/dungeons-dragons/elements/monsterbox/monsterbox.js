define([
    'lovesyou_util'
    ,'lovesyou_template'
    ,'5e/monsters'
], function (util, LYT, monsters) {

    let monster = window.location.hash.split('/');
    monster = monster[monster.length-1];
    monster = monster.replace(/%20/g, ' ',);
    monster = monsters[monster];
    
    let objectToHtml = (obj, container) => {
        
        for(let prop in obj){
            let dv = document.createElement('div');
            let spkey = document.createElement('span');
            spkey.innerHTML = prop+': ';
            spkey.style.minWidth = '90px';
            spkey.style.display ='inline-block'
            spkey.style.fontWeight = 'bold';
            dv.appendChild(spkey);

            let val = obj[prop];
            if(typeof(val)!=='object'){
                let spval = document.createElement('span');
                spval.innerHTML = val;
                dv.appendChild(spval);
            }
            else if(Array.isArray(val)){
                let ul = document.createElement('ul');
                for(let i in val){
                    let li = document.createElement('li');
                    if(typeof(val[i])!=='object'){    
                        li.innerHTML = val[i];
                    }
                    else {
                        objectToHtml(val[i], li);
                    }
                    ul.appendChild(li);
                }
                dv.appendChild(ul);
            }
            else{
                objectToHtml(val, dv);
            }
            container.appendChild(dv);
        }
    }

    var template = new LYT();
    template.content_url = 'site/dungeons-dragons/elements/monsterbox/monsterbox.html';
    
    template.onDataBound = function () {
        let data = template.data;
        let mb = document.getElementById('mb');
        
        objectToHtml(data, mb);


        for(let p in data){
            let elem = document.getElementById('monster-'+p);
            if(elem){
                elem.innerHTML = data[p];
            }
        }
    }
    template.onContentBound = function () {
        template.data = monster;
    }

    return template;
});