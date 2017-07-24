/* Importação do app */
var app = require('./config/server');

// Porta de excução da aplicação
var port = 80;

app.listen(port, function(){
    console.log('Servidor rodando na porta:' + port);
});
