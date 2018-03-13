// using require.js
requirejs.config({
	baseUrl : "", // root.

	paths:{ // establishes shortcuts to relative paths. Gotta check this with URLs
		'colorizer' : 'scripts/vendor/paletton'
		,'dice' : 'scripts/homerolled/LYDice/LYDice'
		,'elements' : 'site/dungeons-dragons/character-sheets/elements/'
		,'router' : 'scripts/homerolled/router'
		,'lovesyou_template' : 'scripts/homerolled/lovesyou_template'
		,'lovesyou_util' : 'scripts/homerolled/lovesyou_util'
		,'prism' : 'scripts/vendor/prism'
		,'dtf' : 'scripts/homerolled/dtf'
		,'tiles' : 'scripts/homerolled/tiles'
		,'xhr' : 'scripts/homerolled/xhr'
		,'lovesyou_table' : 'scripts/homerolled/lovesyou_table'
	},
});

require([
	'scripts/initialize'
],(initializer)=>{
	console.log('rqmain.js application entry point');
	initializer.init();
	//router.navigate()
});