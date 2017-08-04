module.exports.appLegislativo = function(application, req, res) {
    res.render('app-legislativo/index');
};
// Controller da página perguntas frequentes, app legislativo
module.exports.faq = function(application, req, res) {
    var faqService = new application.services.FaqService();
    // Pega todas as perguntas frequentes cadastradas
    faqService.getAllFaq(false, 'categories=20', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log('faq return ' + data.length + ' results');
            res.render('app-legislativo/faq', {
                result: data,
                error: {}
            });
        } else {
            res.render('app-legislativo/faq', {
                result: {},
                error: error
            });
        };
    });
};
// Controller da página avisos, esclarecimentos e impugnacoes
module.exports.avisosEsclarecimentosImpugnacoes = function(application, req, res) {
    var AEIService = new application.services.AEIService();
    AEIService.getAvisos('categories=17', function(error, response, body) {
        // sucess get avisos
        if (!error && response.statusCode == 200) {
            // Get data json
            var avisos = JSON.parse(body);
            console.log('avisos return ' + avisos.length + ' results');

            // Call for get impugnacoes
            AEIService.getImpugnacoes('categories=19', function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    // Get data json
                    var impugnacoes = JSON.parse(body);
                    console.log('impugnacoes return ' + impugnacoes.length + ' results');

                    AEIService.getEsclarecimentos('categories=21', function(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            // Get data json
                            var esclarecimentos = JSON.parse(body);
                            console.log('esclarecimentos return ' + esclarecimentos.length + ' results');

                            res.render('app-legislativo/aei', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: esclarecimentos,
                                error: {}
                            });

                        } else {
                            //console.log(error);
                            res.render('app-legislativo/aei', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: {},
                                error: error
                            });
                        }
                    });

                } else {
                    //console.log(error);
                    res.render('app-legislativo/aei', {
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
            res.render('app-legislativo/aei', {
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
    res.render('app-legislativo/aceite-desafio');
};
// Controller do formulário de cadastro do desafio PF
module.exports.cadastroFormPF = function(application, req, res){
      res.render('forms/app-legislativo/cadastro-form-pf');
};
// Controller do formulário de cadastro do desafio PJ
module.exports.cadastroFormPJ = function(application, req, res){
      res.render('forms/app-legislativo/cadastro-form-pj');
};
