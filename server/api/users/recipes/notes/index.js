const notes = require('express').Router();
const { DB, removeProperties } = require('../../../../../utils');
const { validateId, validateNoteObject } = require('../../../../middleware/custom');

notes.get('/', (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes' });
});

notes.get('/:noteId', validateId('notes', 'noteId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes' });
});

notes.post('/', validateNoteObject, (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes' });
});

notes.put('/:noteId', validateNoteObject, validateId('notes', 'noteId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes' });
});

notes.delete('/:noteId', validateId('notes', 'noteId'), (req, res) => {
    res.status(200).json({ message: 'Response from /api/users/:userId/recipes/:recipeId/notes' });
});


module.exports = notes;