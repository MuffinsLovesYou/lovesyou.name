/*
	unassorted UI helpers and utility functions that don't have better homes. con
*/
define([],()=>{

	let Util = function(){
		let _util = this;

		// parses ?urlParam=value into { urlParam : value } dictionary
		_util._url_parameters;
		Object.defineProperty(_util, 'url_parameters',{
			get : ()=>{
				if(!_util._url_parameters){
					_util._url_parameters = {};
					let search  = /([^&=]+)=?([^&]*)/g;
					let query = window.location.search.substring(1);

					let match;
					while(match = search.exec(query)){
						let k = decodeURIComponent(match[1]);
						let v = decodeURIComponent(match[2]);
						_util._url_parameters[k] = v;
					}
				}
				return _util._url_parameters
			}
		});
		
		// gets the uri of the currently executing script
		Object.defineProperty(_util, 'context', {
			get : function() {		
				return ((x=document.getElementsByTagName('script'))=>{
					return x[x.length-1].src.split('/').slice(0,-1).join('/')+'/';
				})();
			}
		});
		
		return _util;
	}

	return new Util();
});