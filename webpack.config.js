const path = require("path");

module.exports = {
    //archivo que se va a converitir (entry point)
    entry: "./src/index.js",

    //archivo resultante después de la conversion
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
};