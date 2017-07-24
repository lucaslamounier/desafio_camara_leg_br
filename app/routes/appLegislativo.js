module.exports = function(application){

      application.get('/desafios/app-legislativo', function(req,res){
          application.app.controllers.appLegislativo.appLegislativo(application, req, res);
      });

      application.get('/desafios/app-legislativo/faq', function(req,res){
          application.app.controllers.appLegislativo.faq(application, req, res);
      });

      application.get('/desafios/app-legislativo/avisos-esclarecimentos-impugnacoes', function(req,res){
          application.app.controllers.appLegislativo.avisosEsclarecimentosImpugnacoes(application, req, res);
      });

      application.get('/desafios/app-legislativo/forms/aceite-desafio', function(req,res){
          application.app.controllers.appLegislativo.aceiteDesafio(application, req, res);
      });
};
