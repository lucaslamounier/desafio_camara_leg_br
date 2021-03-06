var request = require('request');
// Classe de Perguntas frequentes
function FaqService() {
    this._options = {
        uri: "http://babygrude.com/desafio/wp-json/wp/v2/posts?", // Default URI
        method: "GET",
        timeout: 10000,
        proxy: 'http://127.0.0.1:3128',
    };
};

// Get all FAQ
FaqService.prototype.getAllFaq = function(uri, categories, callback) {

    if (uri) this._options['uri'] = uri;

    if (categories) this._options['uri'] += categories;

    //console.log('FaqService request from url: ' + this._options['uri']);
    request(this._options, callback);
};

// Exporta o modulo FaqService
module.exports = function() {
    return FaqService;
};
