const recipes = require('express').Router();
const notes = require('./notes');

recipes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});


recipes.use('/:recipeId/notes', notes);

module.exports = recipes;