const methods = require('express').Router();

methods.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/methods'});
});

module.exports = methods;