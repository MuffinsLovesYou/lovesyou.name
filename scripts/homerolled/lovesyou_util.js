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
		
		return util;
	}

	return new Util();
});