module.exports = function(application) {

    application.get('/desafios/novo-portal', function(req, res) {
        application.app.controllers.novoPortal.novoPortal(application, req, res);
    });

    application.get('/desafios/novo-portal/faq', function(req, res) {
        application.app.controllers.novoPortal.faq(application, req, res);
    });

    application.get('/desafios/novo-portal/avisos-esclarecimentos-impugnacoes', function(req, res) {
        application.app.controllers.novoPortal.aei(application, req, res);
    });

    application.get('/desafios/novo-portal/aceite-o-desafio', function(req, res) {
        application.app.controllers.novoPortal.aceiteDesafio(application, req, res);
    });

    application.get('/desafios/novo-portal/envia-form-pf', function(req, res) {
        application.app.controllers.novoPortal.cadastroFormPF(application, req, res);
    });

    application.get('/desafios/novo-portal/envia-form-pj', function(req, res) {
        application.app.controllers.novoPortal.cadastroFormPJ(application, req, res);
    });

    application.post('/forms/novo-portal/envia-form-pf', function(req, res) {
        // recupera os dados do formulário
        var dadosForm = req.body;
        console.log(dadosForm);
        res.send({dadosForm: dadosForm});
        //application.app.controllers.novoPortal.cadastroFormPJ(application, req, res);
    });

    application.post('/forms/novo-portal/envia-form-pj', function(req, res) {
        // recupera os dados do formulário
        var dadosForm = req.body;
        console.log(dadosForm);
        res.send({msg: 'cheguei no post envia-form-pj'});
        //application.app.controllers.novoPortal.cadastroFormPJ(application, req, res);
    });

};
