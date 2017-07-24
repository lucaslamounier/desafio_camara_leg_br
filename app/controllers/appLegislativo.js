module.exports.appLegislativo = function(application, req, res){
      res.render('app-legislativo/index');
};

module.exports.faq = function(application, req, res){
      res.render('app-legislativo/faq/index');
};

module.exports.avisosEsclarecimentosImpugnacoes = function(application, req, res){
      res.render('app-legislativo/aei/index');
};

module.exports.aceiteDesafio = function(application, req, res){
      res.render('app-legislativo/forms/aceite-desafio');
};
