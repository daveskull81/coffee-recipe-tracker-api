const auth = require('express').Router();

auth.get('/login', (req, res) => {
    res.status(200).json({ message: 'Response from /api/auth/login'});
});

auth.get('/register', (req, res) => {
    res.status(200).json({ message: 'Response from /api/auth/register'});
});

module.exports = auth;