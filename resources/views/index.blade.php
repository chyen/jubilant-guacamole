<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Dummy</title>
        <meta charset="utf-8"/>
        <meta name="_token" content="{!! csrf_token() !!}"/>
        <!-- @section('main-css')
            {!! Html::style('css/app.css', array(), env('APP_ENV') == 'production') !!}
            {!! Html::style('css/global.css', array(), env('APP_ENV') == 'production') !!}
        @show -->
    </head>
    <body>
      <div id='app'>Cokolwiek222</div>
        <!-- {!! Html::script('js/plugins.js', array(), env('APP_ENV') == 'production') !!}
        {!! Html::script('js/app.js', array(), env('APP_ENV') == 'production') !!} -->
    </body>
</html>
