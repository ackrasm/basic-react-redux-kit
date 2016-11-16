var webpack = require("webpack");

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: "./dist",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
        ]
    }
}