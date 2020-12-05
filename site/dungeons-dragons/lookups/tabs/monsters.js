import { lite } from '../../../../scripts/homerolled/lite.js';
import { Gridify } from '../../../../scripts/homerolled/gridify.js';
import { monsters } from '../../../../5e/monsters.js';
import { MonsterBox } from '../../elements/monsterbox/monsterbox.js';
import { Modal } from '../../../common/modal/modal.js';


export let MonstersTab = lite.extend({
    content : `<div id='monsters-table'></div><div id='monsterbox-container'></div>`
    , initialize : function() {
        let _monsters = [];
        for(let k in monsters) { _monsters.push(monsters[k]); }
        this.data = _monsters;
        window.monsters = _monsters
    }
    , onContentBound : function(){
        let view = this;
        view.drawTable();
    }
    , drawTable : function(_spells){
        let view = this;
        new Gridify({
            container : 'monsters-table',
            data : view.data,
            columns : [
                {
                    field : 'Name',
                    header : 'Name',
                    filter : true,
                    style : 'width: 200px; text-align:left; text-decoration:underline',
                    sort : true,
                    click : (e)=>{
                        new Modal({
                            container : document.getElementById('modal-container') 
                        }).attach();
                        new MonsterBox({
                            data : monsters[e.target.innerText]
                            , container : document.getElementById('modal-content')
                            , onContentBound : function() {
                                let box = document.getElementById('monsterbox');
                                box.style.maxHeight = '80%';
                                box.style.overflow  = 'auto';
                            }         
                        }).attach();
                    }
                }
                , { field : 'Challenge', header : 'CR', 
                    style : 'width:75px; text-align:right;',
                    filter : { rule : view.crFilter }, 
                    sort : { comparator : view.crSort }
                }
                , { field : 'Type', header : 'Type',
                    style : 'width: 125px; overflow:hidden;',
                    filter : true, format : (v)=> { return v.split(',')[0]; }, sort : true }
                , { field : 'Alignment', header : 'Alignment', style : 'width:100px;', filter : true, sort : true }
            ]
            , paging : true
            , style : 'table-layout:fixed; width:500px;'
            , className : 'grid'
            , onTableCellCreated : function(td, column) {
                if(td.style.overflow === 'hidden') { td.title = td.innerText; } 
            }
        });
    }
    , crSort : function(a, b) {
        let parse = (cr) => cr.indexOf('/') === -1 ? +cr : 1/(cr.split('/')[1]); 
        a = parse(a);
        b = parse(b);
        if(a == b) { return 0; }
        return a > b ? 1 : -1;
    }
    , crFilter : function(cellValue, filterValue){
        if(+filterValue === 1) { return +cell_value === 1; }
        return cellValue.substr(0, filterValue.length) === filterValue; 
    }
});

