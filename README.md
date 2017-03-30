# lovesyou.name
This is my personal website for fooling around.  The .name domain is a bit wonky, but it is cheap and I'm not trying to draw traffic here so no biggie.  It is mostly for me experimenting and playing with web technologies, as well as occasionally creating small apps/pages for my use.  

## the theme
When I first created the website I wanted a clean theme that was largely image based, as I wasn't going to be loading the thing down with content. I got the 'phantom' theme from https://html5up.net/phantom and retooled it a bit.  Recently I did a ground-up rewrite, keeping the same general concepts, but stripping it down so heavily there's not much of the original theme left.
I'm really pleased with the tiles I got set up:  
<img src='http://i.imgur.com/tQQ2CKJ.png' width=400 height=250>  
I generated a handful of these pixellated/obscured images and randomize them on page load. The pixellation is done by Reddit.com's NSFW filter, though the images I'm using are pretty benign.  

## scripts  
Most of the code is homerolled.  I generally like pretty minimal low-frills sites, and don't like importing a bunch of frameworks.  Likewise since a lot of the site's purpose is playing around, I'm likely to just replicate any functionality I want.  The two things I have imported right now are prism.js for syntax highlighting on code blocks, require.js for dynamic script loading and modularization, and I make calls to paletton.com's API for colorization.  

I recently converted the site to being a single-page application. The scripts to handle this are based a bit on Backbone.js and Marionette.js (backbone extension), but fit in the palm of your hand since they don't need to do much. lovesyou_router handles url-hash 'redirects', and lovesyou_template handles dynamic content loading. There's some kinks to iron out, and I wouldn't try to sell this as a professional product, but the whole thing generally stays well under 500kb, and I should be able to plug in a API if I wanted in the future. 

