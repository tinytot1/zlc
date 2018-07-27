#!/usr/bin/env node
const express = require('express');
var serveIndex = require('serve-index')
// const webpack = require('webpack');
// const webpackDevServer = require('webpack-dev-server');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./config/webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     contentBase: config.devServer.contentBase,
//     hot: config.devServer.hot
// }));
app.use(express.static("dist"), serveIndex("dist"))

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});