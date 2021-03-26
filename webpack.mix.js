let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/themes/bliss/assets/js') 
   .copyDirectory('build/fonts', 'public/themes/bliss/assets/fonts')
   .sass('build/scss/appfront.scss', 'public/themes/bliss/assets/css')
   .js('build/js/appfront.js', 'public/themes/bliss/assets/js')
   .sass('resources/assets/sass/app.scss', 'public/themes/bliss/assets/css');
   // .sass('resources/assets/sass/bliss.scss', 'public/themes/bliss/css');
