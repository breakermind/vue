const mix = require('laravel-mix');

// mix.js('resources/js/app.js', 'public/js').vue().postCss('resources/css/app.css', 'public/css', []).extract(['vue'])

mix.js('resources/js/app.js', 'public/js')
	.vue()	
	.postCss('resources/css/app.css', 'public/css', [
		//
	])

mix.sass('resources/sass/app.scss', 'public/css').options({
	// processCssUrls: false
});

if (mix.inProduction()) {
	mix.version();
}