const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

const subRoutes = require('./routes/subscriber');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/subscribe', subRoutes);

module.exports = app;
module.exports.handler = serverless(app);
