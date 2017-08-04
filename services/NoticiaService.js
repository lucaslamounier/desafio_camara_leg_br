var request = require('request');
// Classe NoticiaService
function NoticiaService() {
    this._options = {
        uri: "http://babygrude.com/desafio/wp-json/wp/v2/posts?categories=1&_embed",
        method: "GET",
        timeout: 10000,
        proxy: 'http://127.0.0.1:3128',
    };
};

// Pega as últimas noticias
NoticiaService.prototype.getLastNews = function(callback) {
    // para retorna somente 3 itens por página
    this._options['uri'] += '&per_page=3';
    //console.log('NoticiaService request from url: ' + this._options['uri']);
    request(this._options, callback);
};

NoticiaService.prototype.getNews = function(noticia_slug, callback) {
    // Pega a informação da noticia
    this._options['uri'] += '&slug=' + noticia_slug;
    //console.log('NoticiaService request from url: ' + this._options['uri']);
    request(this._options, callback);
};

// Exporta o modulo NoticiaService
module.exports = function() {
    return NoticiaService;
};
