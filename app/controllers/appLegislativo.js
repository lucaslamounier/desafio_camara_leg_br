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
            res.render('app-legislativo/faq/index', {
                result: data,
                error: {}
            });
        } else {
            res.render('app-legislativo/faq/index', {
                result: {},
                error: error
            });
        };
    });
};

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

                            res.render('app-legislativo/aei/index', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: esclarecimentos,
                                error: {}
                            });

                        } else {
                            //console.log(error);
                            res.render('app-legislativo/aei/index', {
                                avisos: avisos,
                                impugnacoes: impugnacoes,
                                esclarecimentos: {},
                                error: error
                            });
                        }
                    });

                } else {
                    //console.log(error);
                    res.render('app-legislativo/aei/index', {
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
            res.render('app-legislativo/aei/index', {
                avisos: {},
                impugnacoes: {},
                esclarecimentos: {},
                error: error
            });
        };
    });
};

module.exports.aceiteDesafio = function(application, req, res) {
    res.render('app-legislativo/forms/aceite-desafio');
};
