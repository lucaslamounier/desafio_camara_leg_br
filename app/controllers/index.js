module.exports.index = function(application, req, res){

      var noticiaService = new application.services.NoticiaService();

      // Pega as últimas noticias
      noticiaService.getLastNews(function (error, response, body) {
          if (!error && response.statusCode == 200){
              // Get data result
              var data = JSON.parse(body);
              var lastNews =  data[0];
              var othersNews = data.slice(1,3);
              res.render('index', {
                  ultimaNoticia: lastNews,
                  outrasNoticias:  othersNews
              });

          }else{
              res.render('index', {
                  ultimaNoticia: {},
                  outrasNoticias:{},
              });
          };
      });
};
