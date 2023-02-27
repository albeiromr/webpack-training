const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');   

module.exports = {
    //archivo que se va a converitir (entry point)
    //entry: "./src/index.js",

    entry: {
        index: "./src/index.js",
        print: "./src/print.js"
    },

    //este pluguin se usa para crear de forma automática un archivo index.html,
    //de forma dinámica agrega todos los scripts del bundle en el html
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
        }),
    ],

    //archivo resultante después de la conversion
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
};