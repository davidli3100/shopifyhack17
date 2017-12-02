var apiai = require('apiai');

var app = apiai("4a43ab478561429481e7decad17f1875");

var request = app.textRequest('Hi', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
