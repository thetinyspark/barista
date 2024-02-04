const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { EnvironmentPlugin } = require("webpack");

const platform = "node";

module.exports = {
    mode: "production",
    entry: './dist/index.js',
    target: 'node',
    externals: [nodeExternals()],
    plugins: [new EnvironmentPlugin({PLATFORM: platform})],
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};