'use strict';
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var webpackConfig = require('../webpack.config.js');

var app = express();

app.use(express.static(__dirname + '/public'));

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);


app.use(express.static('./dist'));

app.use('/', function (req, res) {    
    // res.sendFile(path.resolve('../app/index.html'));
});

var server = app.listen(app.get('port'), function() {
    console.log('listening on port', app.get('port'));
});