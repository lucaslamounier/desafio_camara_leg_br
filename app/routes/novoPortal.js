module.exports = function(application){

      application.get('/desafios/novo-portal', function(req,res){
          application.app.controllers.novoPortal.novoPortal(application, req, res);
      });

      application.get('/desafios/novo-portal/faq', function(req,res){
          application.app.controllers.novoPortal.faq(application, req, res);
      });

      application.get('/desafios/novo-portal/avisos-esclarecimentos-impugnacoes', function(req,res){
          application.app.controllers.novoPortal.aei(application, req, res);
      });

      application.get('/desafios/novo-portal/aceite-o-desafio', function(req,res){
          application.app.controllers.novoPortal.aceiteDesafio(application, req, res);
      });
};
