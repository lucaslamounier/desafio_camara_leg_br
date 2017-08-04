module.exports = function(application) {

    application.get('/desafios/app-legislativo', function(req, res) {
        application.app.controllers.appLegislativo.appLegislativo(application, req, res);
    });

    application.get('/desafios/app-legislativo/faq', function(req, res) {
        application.app.controllers.appLegislativo.faq(application, req, res);
    });

    application.get('/desafios/app-legislativo/avisos-esclarecimentos-impugnacoes', function(req, res) {
        application.app.controllers.appLegislativo.avisosEsclarecimentosImpugnacoes(application, req, res);
    });

    application.get('/desafios/app-legislativo/aceite-o-desafio', function(req, res) {
        application.app.controllers.appLegislativo.aceiteDesafio(application, req, res);
    });

    application.get('/desafios/app-legislativo/envia-form-pf', function(req, res) {
        application.app.controllers.appLegislativo.cadastroFormPF(application, req, res);
    });

    application.get('/desafios/app-legislativo/envia-form-pj', function(req, res) {
        application.app.controllers.appLegislativo.cadastroFormPJ(application, req, res);
    });

};
