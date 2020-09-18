<html>
    <head>
        <title>App Name - @yield('title')</title>
        <style>
            .sliders {
                padding: 1.5em
            }
            /* the slider bar */
            .slider {
                position: relative;
                width: 100%;
                height: 1em;
                margin: 1.5em auto;
                background-color: #29e;
                border-radius: 0.5em;
                box-sizing: border-box;

                font-size: 1em;

                -ms-touch-action: none;
                touch-action: none;
            }

            /* the slider handle */
            .slider:before {
                content: "";
                display: block;
                position: relative;
                top: -0.5em;

                width: 2em;
                height: 2em;
                margin-left: -1em;
                border: solid 0.25em #fff;
                border-radius: 1em;
                background-color: inherit;

                box-sizing: border-box;
            }
            /* display the value */
            .slider:after {
                content: attr(data-value);
                position: absolute;
                top: -1.5em;
                width: 2em;
                line-height:1em;
                margin-left: -1em;
                text-align: center;
            }
        </style>
    </head>
    <body>
            <div class="content">
                @yield('content')
            </div>
        <!-- Загрузим наш React-компонент. -->
        <script src="js/index.js"></script>
    </body>
</html>