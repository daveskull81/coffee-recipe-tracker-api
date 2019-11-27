const coffees = require('express').Router();
const { DB, removeProperties } = require('../../../../utils');

coffees.get('/', (req, res) => {
    DB.search('coffees', 'user_id', req.userId)
        .then(results => {
            const coffees = removeProperties(results, ['user_id']);
            res.status(200).json(coffees);
        })
        .catch(err => res.status(500).json({ message: "There was an error getting the coffees.", error: err.message }));
});

coffees.post('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/coffees'});
});

coffees.get('/:coffeeId', (req, res) => {
    DB.findById('coffees', req.params.coffeeId)
        .then(result => {
            const coffee = removeProperties(result, ['user_id']);
            res.status(200).json(coffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the coffee', error: err.message }));
});

coffees.put('/:coffeeId', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/coffees'});
});

coffees.delete('/:coffeeId', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/coffees'});
});

module.exports = coffees;