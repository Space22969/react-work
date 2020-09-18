const path = require("path");
module.exports = {
    entry: "./resources/js/index.js",
    mode: "development",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'public/js'),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react',
                            "es2015",
                            "stage-0",
                            "stage-1",
                        ],
                        "plugins": [
                            [
                                "@babel/plugin-proposal-decorators",
                                {
                                    "legacy": true
                                }
                            ],
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    }
};