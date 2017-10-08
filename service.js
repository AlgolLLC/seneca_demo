// Create a new SenecaJS application
var seneca = require('seneca')();
var entities = require('seneca-entity');

seneca
  .use('basic')
  .use(entities)
  .use('jsonfile-store', {folder:'data'})
  .use('patient');

// Listen for messages in the specified transport type and port.
seneca.listen({
    "type": "http",
    "port": 8080
});
