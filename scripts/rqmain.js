// Using require.js


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
	'router',
	'lovesyou_template',
	'tiles'],(router)=>{
		console.log('rqmain.js application entry point');
		router.navigate()
	
		var emojis = [
		"\\ \\ \\٩(｡•ㅅ•｡)و/ / /"
		,"(ﾉ･ｪ･)ﾉ"
		,"(ﾉ^∇^)ﾉﾟ"
		,"ヾ(￣◇￣)ノ"
		,"(°◡°♡).:｡"
		,"(︶｡︶✽)"
		,"(￣(エ)￣)ゞ"
		];
		document.title = emojis[Math.floor(Math.random()*emojis.length)];
});