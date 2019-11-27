const coffees = require('express').Router();

coffees.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/coffees'});
});

module.exports = coffees;