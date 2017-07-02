/*
	unassorted UI helpers and utility functions
*/
define([],()=>{

	let Util = function(){
		let util = this;

		// parses ?urlParam=value into { urlParam : value } dictionary
		util._url_parameters;
		Object.defineProperty(util, 'url_parameters',{
			get : ()=>{
				if(!util._url_parameters){
					util._url_parameters = {};
					let search  = /([^&=]+)=?([^&]*)/g;
					let query = window.location.search.substring(1);

					let match;
					while(match = search.exec(query)){
						let k = decodeURIComponent(match[1]);
						let v = decodeURIComponent(match[2]);
						util._url_parameters[k] = v;
					}
				}
				return util._url_parameters
			}
		});
		// gets the uri of the currently executing script
		Object.defineProperty(util, 'context', {
			get : function() {		
				return ((x=document.getElementsByTagName('script'))=>{
					return x[x.length-1].src.split('/').slice(0,-1).join('/')+'/';
				})();
			}
		});
		
		
		/* this is really limited right now */
		util.fill_table = function(args){
			let tb = args.table.createTBody();
			let th = args.table.createTHead();
			let hr = th.insertRow(0);
			for(let c in args.columns){
				let hc = hr.insertCell(c);
				hc.innerHTML = '<strong>'+args.columns[c]+'</strong>';
			}
			for(let r in args.data){
				let row = args.data[r];
				if(typeof(row) !== 'object') { continue; }
				let tr = tb.insertRow();
				args.columns.forEach((col)=>{
					let tc = tr.insertCell(tr.cells.length);
					let prop = typeof(col) === 'object' ? col.Property : col;
					let value = row[prop];
					tc.innerHTML = value;  
				});
			}
		}
		return util;
	}

	return new Util();
});