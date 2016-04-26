/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

var routes = require('./routes');
var user = require('./routes/user');

var http = require('http');
var path = require('path');
var models = require("./models");   //temporary
var _ = require("underscore");



// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'happyfresh/')));
app.use('view engine','');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);



// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index); //routes to index


var custom = require('./customFunction.js')();
var product_app = require('./productApp.js')("product",custom,app,models,_);  product_app.main(); //require productApp

var name_app = require('./nameApp.js')("name",custom,app,models,_);  name_app.main(); //require nameApp 
//temporary //var name_app = require('./nameApp.js')(app,models,_);  name_app.main(); //require productApp 




/*
var about = require('./routes/about');
app.get('/about', about.about);



var pro_manager = require('./routes/pro_manager');
app.get('/pro_manager', pro_manager.pro_manager); */

models.sequelize.sync().then(function() {     //temporary
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});   //temporary
