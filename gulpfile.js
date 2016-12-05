const elixir = require('laravel-elixir');

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
  mix.copy('./resources/assets/plugins/bootstrap-3.3.7-dist/css', './public/bootstrap/css');

  mix.less([
      './resources/assets/less/*.less'
  ], 'public/css/global.css');

  // mix.scripts([
  //     './resources/assets/plugins/*/js'
  // ], 'public/js/plugins.js');

  mix.browserify([
      './resources/assets/js/app.js'
  ], 'public/js/app.js');
});
