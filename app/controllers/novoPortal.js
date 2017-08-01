module.exports.novoPortal = function(application, req, res){
      res.render('novo-portal/index');
};

// Controller da página perguntas frequentes, novo portal
module.exports.faq = function(application, req, res){
      var faqService = new application.services.FaqService();
      // Pega todas as perguntas frequentes cadastradas
      faqService.getAllFaq(false, 'categories=21', function (error, response, body) {
          if (!error && response.statusCode == 200){

              var data = JSON.parse(body);

              console.log("[Novo Portal] Success ! FaqService return " + data.length + " results.");

              res.render('novo-portal/faq/index', { result: data, error: {} });
          }else{
              res.render('novo-portal/faq/index', { result: {}, error: error });
          };
      });
};

module.exports.aei = function(application, req, res){

      var AEIService = new application.services.AEIService();

      AEIService.getAvisos('categories=16', function (error, response, body) {
            // sucess get avisos
           if (!error && response.statusCode == 200){
              // Get data json
              var avisos = JSON.parse(body);
              //console.log('avisos return ' + avisos.length + ' results');

              // Call for get impugnacoes
              AEIService.getImpugnacoes('categories=18', function (error, response, body) {
                      if (!error && response.statusCode == 200){
                          // Get data json
                          var impugnacoes = JSON.parse(body);
                          //console.log('impugnacoes return ' + impugnacoes.length + ' results');
                          res.render('novo-portal/aei/index', { avisos: avisos, impugnacoes: impugnacoes, error: {} });

                      }else{
                          //console.log(error);
                          res.render('novo-portal/aei/index', { avisos: {},  impugnacoes: {}, error: error });
                      }
              });

          // error get avisos
           }else{
              //console.log('Get avisos error.. ' + error);
              res.render('novo-portal/aei/index', { avisos: {},  impugnacoes: {}, error: error });
            };
       });
};

module.exports.aceiteDesafio = function(application, req, res){
      res.render('novo-portal/forms/aceite-desafio');
};
