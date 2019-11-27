const recipes = require('express').Router();
const notes = require('./notes');
const { addParamToReqObj } = require('../../../middleware/custom');

recipes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes'});
});


recipes.use('/:recipeId/notes', addParamToReqObj('recipeId'), notes);

module.exports = recipes;