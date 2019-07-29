'use strict';

const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRoutes = require('../routes/api');
const subRoutes = require('../routes/subscriber');

const file = path.parse(__filename).name;

const netlifyFuncs = `/.netlify/functions/${file}`;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`${netlifyFuncs}/api`, apiRoutes);
app.use(`${netlifyFuncs}/api/subscribe`, subRoutes);

module.exports = app;
module.exports.handler = serverless(app);
