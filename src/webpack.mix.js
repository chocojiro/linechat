// const mix = require('laravel-mix');

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

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');


// typescript用に編集
const mix = require("laravel-mix");
mix.ts("resources/ts/App.tsx", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .version();