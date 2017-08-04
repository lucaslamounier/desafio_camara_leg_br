module.exports.index = function(application, req, res) {

    var noticiaService = new application.services.NoticiaService();

    // Pega as últimas noticias
    noticiaService.getLastNews(function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            var lastNews = data[0];
            var othersNews = data.slice(1, 3);
            var existsNews = false;

            if (data.length > 0) existsNews = true;
            console.log("NoticiaService getLastNews return " + data.length + " results.");
            res.render('index', {
                existsNews: existsNews,
                ultimaNoticia: lastNews,
                outrasNoticias: othersNews
            });

        } else {
            //console.log("request: " + error + " get last tree news, error !");
            res.render('index', {
                ultimaNoticia: {},
                outrasNoticias: {},
            });
        };
    });
};


module.exports.noticia = function(application, req, res) {
    var noticiaService = new application.services.NoticiaService();
    // recupera da url o slug da noticia
    var slug = req.query['identificador'];

    if(!slug){
        res.render('noticias/noticia', {error: { msg: 'Parâmetro inválido !'}, result: {} });
    }

    noticiaService.getNews(slug, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log("NoticiaService getNoticia return " + data.length + " results.");
            res.render('noticias/noticia', {
                result: data,
                error: {}
            });
        } else {
            res.render('noticias/noticia', {
                error: error,
                result: {}
            });
        }
    });
};
