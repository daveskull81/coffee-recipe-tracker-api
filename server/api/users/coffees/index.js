const coffees = require('express').Router();
const { DB, removeProperties } = require('../../../../utils');
const { validateId, validateCoffeeObject } = require('../../../middleware/custom');

coffees.get('/', (req, res) => {
    DB.search('coffees', 'user_id', req.userId)
        .then(results => {
            const coffees = removeProperties(results, ['user_id']);
            res.status(200).json(coffees);
        })
        .catch(err => res.status(500).json({ message: "There was an error getting the coffees.", error: err.message }));
});

coffees.post('/', validateCoffeeObject, (req, res) => {
    DB.add('coffees', req.body)
        .then(result => {
            const newCoffee = removeProperties(result, ['user_id']);
            res.status(200).json(newCoffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error adding the coffee', error: err.message }));
});

coffees.get('/:coffeeId', validateId('coffees', 'coffeeId'), (req, res) => {
    DB.findById('coffees', req.params.coffeeId)
        .then(result => {
            const coffee = removeProperties(result, ['user_id']);
            res.status(200).json(coffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the coffee', error: err.message }));
});

coffees.put('/:coffeeId', validateCoffeeObject, validateId('coffees', 'coffeeId'), (req, res) => {
    DB.update('coffees', req.body, req.params.coffeeId)
        .then(result => {
            const coffee = removeProperties(result, ['user_id']);
            res.status(200).json(coffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error updating the coffee.', error: err.message }));
});

coffees.delete('/:coffeeId', validateId('coffees', 'coffeeId'), (req, res) => {
    DB.remove('coffees', req.params.coffeeId)
        .then(result => {
            const deletedCoffee = removeProperties(result, ['user_id']);
            res.status(200).json(deletedCoffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error deleting the coffee.', error: err.message }));
});

module.exports = coffees;