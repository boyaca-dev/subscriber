const serverless = require('serverless-http');
const app = require('./app');

app.listen(8080, () => {
  console.log('Subscriber app running');
});

module.exports.handler = serverless(app);
