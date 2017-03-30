define([], () => {

	var _paletton = null;
		var callbackDone = null, overlay;

		let setup = {
			widgetServer: 'http://paletton.com',
			iFramePath: '/widget/widget.html',
			iFrameId: 'paletton-widget-iframe',
			overlayId: 'paletton-widget',
			events: {
				loaded: 'palettonwidget/loaded', // listen; widget is loaded and ready => init
				done: 'palettonwidget/done', // listen; widget has to be closed
				pars: 'palettonwidget/pars' // broadcast; inited, send options/pars to widget
			},
			minWidth: 420,
			minHeight: 500
		}

		let defaults = {
			width: 420, // colorizer width in pixels, min width 640 (the palette editor is 420px wide, the rest is for preview)
			height: 500, // colorizer height in pixels, min. height 500
			dark: false, // false = white Colorizer UI, true = dark Colorizer UI
			templateURL: 'http://colorschemedesigner.com/colorizer-demo/template-class/index.html',
			paletteUID: '10S0u0kcglL4Zvw8Eq6eXhmkwen',
			colorizeMode: 'class', // class | less | custom
			myData: null,
			debugMode: false
		}

		let init = function () {
			var ifr, msg;
			msg = {
				id: setup.events.pars,
				data: options
			}
			ifr = document.getElementById(setup.iFrameId);
			ifr.contentWindow.postMessage(msg, '*');
		}

		var cssProps = {'bgcol': 'background','col': 'color','bdcol': 'border-color'}

		function colorizeClass(colTable){
			var i, key, pkey, c1, c2;
			for (colId in colTable['byPalette']) {
				for (i=0;i<5;i++) {
					for (pkey in cssProps) {
						c1 = colTable['byPalette'][colId][i];
						let set = document.getElementsByClassName(pkey+'-'+colId+'-'+i);
						for(let s = 0; s < set.length; s++){
							set[s].style.cssText = cssProps[pkey] +':'+ c1;
						}
					}
				}
			}
		}


		var localcolor = {
			'maximilien' : {"byPalette":{"pri":["#6B532B","#BDAC8F","#8D7955","#4D360E","#221600"]},"byLum":{"pri":["#BDAC8F","#8D7955","#6B532B","#4D360E","#221600"]}}
			,'law' : {"byPalette":{"pri":["#607070","#ABB1B1","#7D8888","#485C5C","#314646"]},"byLum":{"pri":["#ABB1B1","#7D8888","#607070","#485C5C","#314646"]}}
			,'barbican-brady' : {"byPalette":{"pri":["#362200","#180F00","#402C0A","#AB6D00","#FFA200"]},"byLum":{"pri":["#FFA200","#AB6D00","#402C0A","#362200","#180F00"]}} 

		}
		
		var setlocals = function(){
			for(let l in localcolor){
				if(!localStorage[l]){
					localStorage.setItem(l, JSON.stringify(localcolor[l]));
				}
			}
		}

		function colorizeCustom(colTable){
			let key = window.location.hash.slice(1).toLowerCase();
            localStorage.setItem(key, JSON.stringify(colTable));
	
			document.body.style.background = colTable.byPalette.pri['1'];
			document.body.style.borderColor = colTable.byPalette.pri['2'];
			document.body.style.color = colTable.byPalette.pri['3'];
		}

		let revert = function(){
			document.body.style.background = '';
			document.body.style.borderColor = '';
			document.body.style.color = '';
		}

		let done = function (result) {
			overlay.parentNode.removeChild(overlay);
			console.log(JSON.stringify(result.colorTable));
			colorizeCustom(result.colorTable);
		}


		let open = function (callback) {
			options = {}
			for (k in defaults) options[k] = defaults[k]
			
			callbackDone = callback;

			var w, h, wh = window.innerHeight,
				bgCol = (options.dark) ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)';

			overlay = document.createElement('DIV');
			overlay.id = setup.overlayId;
			with(overlay.style) {
				position = 'absolute';
				zIndex = 99999;
				left = 0;
				top = 0;
				right = 0;
				bottom = 0;
				textAlign = 'center';
				minHeight = '500px';
				background = bgCol;
			}

			let body = document.getElementsByTagName('BODY')[0];
			body.appendChild(overlay);

			let iframe = document.createElement('IFRAME');
			iframe.id = setup.iFrameId;
			iframe.src = setup.widgetServer + setup.iFramePath + '#uid=' + options.paletteUID;
			w = Math.max(options.width, setup.minWidth);
			h = Math.max(options.height, setup.minHeight);
			with(iframe.style) {
				width = w + 'px';
				height = h + 'px';
				margin = 'auto';
				marginTop = 50+ 'px';
				border = 'none';
				boxShadow = '3px 3px 15px rgba(0,0,0,0.5)';
			}

			overlay.appendChild(iframe);
		}

		window.addEventListener('message', function (e) {
			if (!e || !e.data) return;
			if (e.data.id == setup.events.loaded) init();
			else if (e.data.id == setup.events.done) done(e.data.data);
			else if (e.data.id=='palettonwidget/colorize/class') colorizeClass(e.data.data);
		}, false);

		let load = function(){
			setlocals();
			let li = document.createElement('li');
			li.id ='li-colorizer';
			let color = document.createElement('span');
			color.innerHTML = 'colorize';
			color.addEventListener('click', ()=>{
				open();
			})
			li.appendChild(color);
			document.getElementById('footer').getElementsByTagName('ul')[0].appendChild(li);
		}

		let on_navigate = function(){
			let key = window.location.hash.slice(1).toLowerCase();
            if(localStorage[key]){
				colorizeCustom(JSON.parse(localStorage.getItem(key)));
			}
			else {
				revert();
			}
		}
	

		_paletton = {
			open: open
			,load : load
			,on_navigate : on_navigate
			,colorize : colorizeCustom
		}

	

	return _paletton;

});