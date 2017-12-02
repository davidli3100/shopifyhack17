var apiai = require('apiai');
const uuidv4 = require('uuid/v4');

var app = apiai("4a43ab478561429481e7decad17f1875");

var request = app.textRequest('Hi', {
    sessionId: uuidv4();
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
