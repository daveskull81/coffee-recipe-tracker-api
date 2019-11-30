const recipes = require('express').Router();
const notes = require('./notes');
const { addParamToReqObj, validateId, validateCoffeeObject } = require('../../../middleware/custom');

recipes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});

recipes.get('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});

recipes.post('/', validateCoffeeObject, (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});

recipes.put('/:recipeId', validateCoffeeObject, validateId('recipes', 'recipeId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});

recipes.delete('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});


recipes.use('/:recipeId/notes', validateId('recipes', 'recipeId'), addParamToReqObj('recipeId'), notes);

module.exports = recipes;