// Using require.js


requirejs.config({
	baseUrl : "", // root.

	paths:{ // establishes shortcuts to relative paths. Gotta check this with URLs
		'colorizer' : 'scripts/vendor/paletton'
		,'dice' : 'scripts/homerolled/LYDice/LYDice'
		,'elements' : 'site/dungeons-dragons/character-sheets/elements/'
		,'lovesyou_router' : 'scripts/homerolled/lovesyou_router'
		,'lovesyou_template' : 'scripts/homerolled/lovesyou_template'
		,'lovesyou_util' : 'scripts/homerolled/lovesyou_util'
		,'prism' : 'scripts/vendor/prism'
		,'dtf' : 'scripts/homerolled/dtf'
		,'tiles' : 'scripts/homerolled/tiles'
		,'xhr' : 'scripts/homerolled/xhr'
		,'lovesyou_table' : 'scripts/homerolled/lovesyou_table'
	},

});

require(['lovesyou_util',
	'lovesyou_template',
	'lovesyou_router',
	'tiles'],()=>{
	
		console.log('rqmain.js application entry point');
	
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
	
	if(require.loaded){
		require.loaded();
	}
});