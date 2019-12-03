const recipes = require('express').Router();
const notes = require('./notes');
const { DB, removeProperties, convertNumBoolean } = require('../../../../utils');
const { addParamToReqObj, validateId, validateRecipeObject } = require('../../../middleware/custom');

recipes.get('/', (req, res) => {
    DB.search('recipes', 'user_id', req.userId)
        .then(results => {
            const recipesWithNoUserId = removeProperties(results, ['user_id']);
            const recipes = recipesWithNoUserId.map(recipe => {
                if (recipe.bloom === null) {
                    return recipe;
                } else {
                    return {
                        ...recipe,
                        bloom : convertNumBoolean(recipe.bloom)
                    };
                };
            });
            res.status(200).json(recipes);
        })
        .catch(err => res.status(500).json({ message: "There was an error getting the recipes.", error: err.message }));
});

recipes.get('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    DB.findById('recipes', req.params.recipeId)
        .then(results => {
            const recipeWithNoUserId = removeProperties(results, ['user_id']);
            let recipe;
            if (recipeWithNoUserId.bloom === null) {
                recipe = recipeWithNoUserId;
            } else {
                recipe = {
                    ...recipeWithNoUserId,
                    bloom: convertNumBoolean(recipeWithNoUserId.bloom)
                };
            };
            res.status(200).json(recipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the recipe.', error: err.message }));
});

recipes.post('/', validateRecipeObject, (req, res) => {
    let newRecipe;
    if (req.body.bloom) {
        newRecipe = {
                ...req.body,
                bloom: convertNumBoolean(req.body.bloom)
            }
    } else {
        newRecipe = req.body;
    };
    DB.add('recipes', newRecipe)
        .then(result => {
            const newRecipeWithNoUserId = removeProperties(result, ['user_id']);
            let newRecipe;
            if (newRecipeWithNoUserId.bloom === null) {
                newRecipe = newRecipeWithNoUserId;
            } else {
                newRecipe = {
                    ...newRecipeWithNoUserId,
                    bloom: convertNumBoolean(newRecipeWithNoUserId.bloom)
                };
            };
            res.status(201).json(newRecipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error adding the recipe.', error: err.message }));
});

recipes.put('/:recipeId', validateRecipeObject, validateId('recipes', 'recipeId'), (req, res) => {
    let updatedRecipe;
    if (req.body.bloom) {
        updatedRecipe = {
            ...req.body,
            bloom: convertNumBoolean(req.body.bloom)
        };
    } else {
        updatedRecipe = req.body;
    };
    DB.update('recipes', updatedRecipe, req.params.recipeId)
        .then(result => {
            const recipeWithNoUserId = removeProperties(result, ['user_id']);
            let recipe;
            if (recipeWithNoUserId.bloom === null) {
                recipe = recipeWithNoUserId;
            } else {
                recipe = {
                    ...recipeWithNoUserId,
                    bloom: convertNumBoolean(recipeWithNoUserId.bloom)
                };
            };
            res.status(200).json(recipe);
        })
        .catch(err => res.status(500).json({ message: 'There was an error updating the recipe.', error: err.message }));
});

recipes.delete('/:recipeId', validateId('recipes', 'recipeId'), (req, res) => {
    DB.remove('recipes', req.params.recipeId)
        .then(result => {
            const deletedCoffeeWithNoUserId = removeProperties(result, ['user_id']);
            let deletedCoffee;
            if (deletedCoffeeWithNoUserId.bloom === null) {
                deletedCoffee = deletedCoffeeWithNoUserId
            } else {
                deletedCoffee = {
                    ...deletedCoffeeWithNoUserId,
                    bloom: convertNumBoolean(deletedCoffeeWithNoUserId.bloom)
                };
            };
            res.status(200).json(deletedCoffee);
        })
        .catch(err => res.status(500).json({ message: 'There was an error deleting the recipe.', error: err.message }));
});


recipes.use('/:recipeId/notes', validateId('recipes', 'recipeId'), addParamToReqObj('recipeId'), notes);

module.exports = recipes;