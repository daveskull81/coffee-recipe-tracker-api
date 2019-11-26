const notes = require('express').Router();

notes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes'});
});


module.exports = notes;