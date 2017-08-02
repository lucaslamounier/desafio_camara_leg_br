module.exports = function(application) {
    application.get('/', function(req, res) {
        application.app.controllers.index.index(application, req, res);
    });

    application.get('/noticia', function(req, res) {
        application.app.controllers.index.noticia(application, req, res);
    });
};
