var request = require('request');

// Classe de Avisos, Esclarecimentos e Impugnacoes
function AEIService() {
    this._host = "http://babygrude.com/desafio/wp-json/wp/v2/posts?";

    this._options = {
        method: "GET",
        timeout: 100000,
        proxy: 'http://127.0.0.1:3128',
    };
};

// Pega todos os avisos
AEIService.prototype.getAvisos = function(categories, callback) {
    var options = this._options;
    if (categories) options['uri'] = this._host + categories;
    //console.log('AEIService request getAvisos from url: ' + options['uri']);
    request(options, callback);
};

// Pega todas as impugnações
AEIService.prototype.getImpugnacoes = function(categories, callback) {
    var options = this._options;
    if (categories) options['uri'] = this._host + categories;
    //console.log('AEIService request getImpugnacoes from url: ' + options['uri']);
    request(options, callback);
};

AEIService.prototype.getEsclarecimentos = function(categories, callback) {
    var options = this._options;
    if (categories) options['uri'] = this._host + categories;
    //console.log('AEIService request getImpugnacoes from url: ' + options['uri']);
    request(options, callback);
};

// Exporta o modulo NoticiaService
module.exports = function() {
    return AEIService;
};
