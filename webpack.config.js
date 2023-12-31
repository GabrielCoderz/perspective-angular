const PerspectiveWebpackPlugin = require("@finos/perspective-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    devtool: "source-map",
    plugins: [
        new PerspectiveWebpackPlugin()
    ]
}