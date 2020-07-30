<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        <div id="root" class="page">
            <div id="header" class="header">

            </div>
            <div class="content">
                @yield('content')
            </div>
            <div id="footer" class="footer">

            </div>
        </div>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

        <!-- Загрузим наш React-компонент. -->
        <script src="js/index.js"></script>
    </body>
</html>