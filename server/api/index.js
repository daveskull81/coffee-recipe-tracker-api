const api = require('express').Router();
const auth = require('./auth');
const users = require('./users');

api.get('/', (req, res) => {
    res.status(200).json({ status: 'SUCCESS' });
});

api.use('/auth', auth);
api.use('/users', users);

module.exports = api;