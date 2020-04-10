requirejs.config({
	baseUrl : "", // root.

	shim : {
		// Bootstrap uses jQuery and popper for some of its control behavior. 
        "bootstrap" : { "deps" : ['jquery'] }
    },
	paths : { 
		// Bootstrap and its dependencies. Local fallbacks if the cdns fail
		"jquery" : ["https://code.jquery.com/jquery-3.4.1.slim.min", 'scripts/vendor/bootstrap/jquery.min']
		, 'bootstrap' : ['https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.bundle.min', 'scripts/vendor/boostrap/boostrap.bundle.min']

		// Code syntax highlighting
		,'prism' : 'scripts/vendor/prism'
		
		,'dice' : 'scripts/homerolled/dice/dice'
		,'router' : 'scripts/homerolled/router'
		,'lite' : 'scripts/homerolled/lite'
		,'please' : 'scripts/homerolled/please'
		,'tiles' : 'scripts/homerolled/tiles'
		,'xhr' : 'scripts/homerolled/xhr'
	},
});

require([
	'bootstrap', 'scripts/initialize', 
],(bootstrap, initializer)=>{
	console.log('rqmain.js application entry point');
	initializer.init();
});