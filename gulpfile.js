const elixir = require('laravel-elixir');

// require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
  mix.copy('./resources/assets/plugins/font-awesome/fonts', './public/fonts/FontAwesome');

  mix.less([
      './resources/assets/less/templates',
      './resources/assets/less/custom'
  ], 'public/css/global.css');

  mix.scripts([
      './resources/assets/plugins/*/js'
  ], 'public/js/plugins.js');

  mix.browserify([
      './resources/assets/js/app.js',
      './resources/assets/js/components'
  ], 'public/js/app.js');
});
