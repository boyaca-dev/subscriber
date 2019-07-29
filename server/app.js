const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRoutes = require('../routes/api');
const subRoutes = require('../routes/subscriber');

const netlifyFuncs = '/.netlify/functions/server';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use('/.netlify/functions/server', router);  // path must route to lambda

// app.use(`${netlifyFuncs}/api`, apiRoutes);
// app.use(`${netlifyFuncs}/api/subscribe`, subRoutes);

module.exports = app;
module.exports.handler = serverless(app);
