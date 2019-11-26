const express = require('express');
const globalMiddleware = require('./middleware/global');
const api = require('./api');

const server = express();
globalMiddleware(server);

server.use('/api', api);

module.exports = server;