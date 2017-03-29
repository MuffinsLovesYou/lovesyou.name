// Using require.js


requirejs.config({
	baseUrl : "", // root.

	paths:{ // establishes shortcuts to relative paths. Gotta check this with URLs
		'elements' : 'site/dungeons-dragons/character-sheets/elements/'
		
		,'lovesyou_util' : 'scripts/homerolled/lovesyou_util'
		,'lovesyou_template' : 'scripts/homerolled/lovesyou_template'
		,'lovesyou_router' : 'scripts/homerolled/lovesyou_router'
		,'tiles' : 'scripts/homerolled/tiles'
		,'prism' : 'scripts/vendor/prism'
		,'colorizer' : 'scripts/vendor/paletton'
		,'dice' : 'scripts/homerolled/LYDice/LYDice'
	},

});

require(['lovesyou_util',
	'lovesyou_template',
	'lovesyou_router',
	'tiles'],()=>{
	
		console.log('base initialized');
	
	
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