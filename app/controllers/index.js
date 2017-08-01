module.exports.index = function(application, req, res){

      var noticiaService = new application.services.NoticiaService();

      // Pega as últimas noticias
      noticiaService.getLastNews(function (error, response, body) {
          if (!error && response.statusCode == 200){
              var data = JSON.parse(body);
              var lastNews =  data[0];
              var othersNews = data.slice(1,3);
              var existsNews = false;

              if(data.length > 0) existsNews = true;
              console.log("Success ! NoticiaService return " + data.length + " results.");

              res.render('index', {
                  existsNews: existsNews,
                  ultimaNoticia: lastNews,
                  outrasNoticias:  othersNews
              });

          }else{
              //console.log("request: " + error + " get last tree news, error !");
              res.render('index', {
                  ultimaNoticia: {},
                  outrasNoticias:{},
              });
          };
      });
};
