// Página inicial do novo portal
module.exports.novoPortal = function(application, req, res) {
    res.render('novo-portal/index');
};
// Controller da página perguntas frequentes, novo portal
module.exports.faq = function(application, req, res) {
    var faqService = new application.services.FaqService();
    // Pega todas as perguntas frequentes cadastradas
    faqService.getAllFaq(false, 'categories=21', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log('faq return ' + data.length + ' results');
            res.render('novo-portal/faq', {
                result: data,
                error: {}
            });
        } else {
            res.render('novo-portal/faq', {
                result: {},
                error: error
            });
        };
    });
};
// Controller da página Avisos, Esclarecimentos e Impugnações
module.exports.aei = function(application, req, res) {

    var AEIService = new application.services.AEIService();
    AEIService.getAvisos('categories=16', function(error, response, body) {
        // sucess get avisos
        if (!error && response.statusCode == 200) {
            // Get data json
            var avisos = JSON.parse(body);
            console.log('avisos return ' + avisos.length + ' results');

            // Call for get impugnacoes
            AEIService.getImpugnacoes('categories=18', function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    // Get data json
                    var impugnacoes = JSON.parse(body);
                    console.log('impugnacoes return ' + impugnacoes.length + ' results');

                    AEIService.getEsclarecimentos('categories=22', function(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            // Get data json
                            var esclarecimentos = JSON.parse(body);
                            console.log('esclarecimentos return ' + esclarecimentos.length + ' results');

                            res.render('novo-portal/aei', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: esclarecimentos,
                                error: {}
                            });

                        } else {
                            //console.log(error);
                            res.render('novo-portal/aei', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: {},
                                error: error
                            });
                        }
                    });

                } else {
                    //console.log(error);
                    res.render('novo-portal/aei', {
                        avisos: avisos,
                        impugnacoes: {},
                        esclarecimentos: {},
                        error: error
                    });
                }
            });

            // error get avisos
        } else {
            //console.log('Get avisos error.. ' + error);
            res.render('novo-portal/aei', {
                avisos: {},
                impugnacoes: {},
                esclarecimentos: {},
                error: error
            });
        };
    });
};
// Controller da página aceite o desafio
module.exports.aceiteDesafio = function(application, req, res) {
    res.render('novo-portal/aceite-desafio');
};
// Controller do formulário de cadastro do desafio PF
module.exports.cadastroFormPF = function(application, req, res){
      res.render('forms/novo-portal/cadastro-form-pf');
};
// Controller do formulário de cadastro do desafio PJ
module.exports.cadastroFormPJ = function(application, req, res){
      res.render('forms/novo-portal/cadastro-form-pj');
};
