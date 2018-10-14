
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// Example route
var index = require('./routes/index');
var timeLine = require('./routes/timeLine');
var description = require('./routes/description');
var about = require('./routes/about');
var help = require('./routes/help');
var contact = require('./routes/contact');
//var bodyParser = require('body-parser');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/add', add.addFriend);
// Add routes here
app.get('/', index.view);
//app.get('/timeLine', timeLine.view);
app.get('/timeline', timeLine.addTimeLine);
app.get('/about', about.about);
app.get('/help', help.getHelp);
app.get('/description', description.addDescription);
app.get('/contact', contact.contact);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
