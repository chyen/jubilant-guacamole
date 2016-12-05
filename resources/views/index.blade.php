<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Dummy</title>
        <meta charset="utf-8"/>
        <meta name="_token" content="{!! csrf_token() !!}"/>
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
        <!-- @section('main-css')
            {!! Html::style('css/app.css', array(), env('APP_ENV') == 'production') !!}
            {!! Html::style('css/global.css', array(), env('APP_ENV') == 'production') !!}
        @show -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="bootstrap/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/global.css">
    </head>
    <body>
      <div id='app'></div>
      {!! Html::script('js/app.js') !!}
        <!-- {!! Html::script('js/plugins.js', array(), env('APP_ENV') == 'production') !!}
        {!! Html::script('js/app.js', array(), env('APP_ENV') == 'production') !!} -->
    </body>
</html>
