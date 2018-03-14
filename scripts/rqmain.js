// using require.js
requirejs.config({
	baseUrl : "", // root.

	paths:{ // establishes shortcuts to relative paths. Gotta check this with URLs
		'colorizer' : 'scripts/vendor/paletton'
		,'dice' : 'scripts/homerolled/LYDice/LYDice'
		,'elements' : 'site/dungeons-dragons/character-sheets/elements/'
		,'router' : 'scripts/homerolled/router'
		,'lite' : 'scripts/homerolled/lite'
		,'lovesyou_util' : 'scripts/homerolled/lovesyou_util'
		,'prism' : 'scripts/vendor/prism'
		,'please' : 'scripts/homerolled/please'
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
});