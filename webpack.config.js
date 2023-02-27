const path = require("path");

module.exports = {
    //archivo que se va a converitir (entry point)
    entry: "./src/index.js",

    //archivo resultante después de la conversion
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    //reglas y loaders que se usarán dentro de la configuración del archivo
    module: {
        rules: [
            {
                /* webpack uses a regular expression to determine which files it should look for and 
                serve to a specific loader. In this case, any file that ends with .css will be served 
                to the style-loader and the css-loader. */
                test: /\.css$/i, //file extensions

                /* Module loaders can be chained. Each loader in the chain applies transformations to the 
                processed resource. A chain is executed in reverse order. The first loader passes its 
                result (resource with applied transformations) to the next one, and so forth. Finally, 
                webpack expects JavaScript to be returned by the last loader in the chain.

                The above order of loaders should be maintained: 'style-loader' comes first and followed 
                by 'css-loader'. If this convention is not followed, webpack is likely to throw errors. */
                use: ['style-loader', 'css-loader'],//module loaders
            }
        ]
    }
};