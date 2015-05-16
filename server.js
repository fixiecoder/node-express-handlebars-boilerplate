var express = require('express');
var port = 3000;
var app = express();
var router = express.Router();
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var exampleService = require('./node-services/exampleService')();

var controllers = {
	example: require('./node-controllers/exampleController')(exampleService)
};

require('./routes')(router, controllers);

app.use('/', router);

app.listen(port);
console.log('listening on port: ', port);