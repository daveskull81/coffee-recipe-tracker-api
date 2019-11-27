const recipes = require('express').Router();
const notes = require('./notes');
const { addRecipeId } = require('../../../middleware/custom');

recipes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});


recipes.use('/:recipeId/notes', addRecipeId, notes);

module.exports = recipes;