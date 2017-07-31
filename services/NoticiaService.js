var request = require('request');

// Classe NoticiaService
function NoticiaService(){
    this._options = {
        uri: "http://babygrude.com/wp-json/wp/v2/posts",
        method: "GET",
        timeout: 10000,
        proxy: 'http://127.0.0.1:3128',
    };
};

// Pega as últimas noticias
NoticiaService.prototype.getLastNews = function(callback){
    // para retorna somente 3 itens por página
    this._options['uri'] += '?per_page=3';
    request(this._options, callback);
};

// Exporta o modulo NoticiaService
module.exports = function(){
    return NoticiaService;
};
