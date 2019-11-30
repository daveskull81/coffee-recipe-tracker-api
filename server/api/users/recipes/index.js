const recipes = require('express').Router();
const notes = require('./notes');
const { DB, removeProperties } = require('../../../../utils');
const { addParamToReqObj, validateId, validateRecipeObject } = require('../../../middleware/custom');

recipes.get('/', (req, res) => {
    DB.search('recipes', 'user_id', req.userId)
        .then(results => {
            const recipes = removeProperties(results, ['user_id']);
            res.status(200).json(recipes);
        })
        .catch(err => res.status(500).json({ message: "There was an error getting the recipes.", error: err.message }));
});

recipes.get('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    DB.findById('recipes', req.params.recipeId)
        .then(results => {
            const recipe = removeProperties(results, ['user_id']);
            res.status(200).json(recipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the recipe.', error: err.message }));
});

recipes.post('/', validateRecipeObject, (req, res) => {
    DB.add('recipes', req.body)
        .then(result => {
            const newRecipe = removeProperties(result, ['user_id']);
            res.status(201).json(newRecipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error adding the recipe.', error: err.message }));
});

recipes.put('/:recipeId', validateRecipeObject, validateId('recipes', 'recipeId'), (req, res) => {
    DB.update('recipes', req.body, req.params.recipeId)
        .then(result => {
            const recipe = removeProperties(result, ['user_id']);
            res.status(200).json(recipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error updating the recipe.', error: err.message }));
});

recipes.delete('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    DB.remove('recipes', req.params.recipeId)
        .then(result => {
            const deletedCoffee = removeProperties(result, ['user_id']);
            res.status(200).json(deletedCoffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error deleting the recipe.', error: err.message }));
});


recipes.use('/:recipeId/notes', validateId('recipes', 'recipeId'), addParamToReqObj('recipeId'), notes);

module.exports = recipes;