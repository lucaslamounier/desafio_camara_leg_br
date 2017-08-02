/* Portal Desafio - Camâra dos Deputados - Brasil */
/* Importação de módulos */
var express = require('express');
var consign = require('consign');
var mustache = require('mustache');
var mustacheExpress = require('mustache-express');
var request = require('request');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* Inicia o projeto express */
var app = express();

/* Register '.mustache' extension with The Mustache Express */
app.engine('mustache', mustacheExpress());

/* setar as variáveis que a "view engine" e 'views' do mustache */
app.set('view engine', 'mustache');
app.set('views', './app/views');

/* Configura o middleware express.static */
app.use(express.static('./app/public'));

/* Configura o middleware body-parser */
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Configura o middleware  express-validator */
app.use(expressValidator());

/* efetua o autoload de: rotas, models e controllers, para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('services')
    .into(app);

/* Exportar o objeto app */
module.exports = app;
