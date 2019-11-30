const notes = require('express').Router();
const { DB, removeProperties } = require('../../../../../utils');
const { validateId, validateNoteObject } = require('../../../../middleware/custom');

notes.get('/', (req, res) => {
    DB.search('notes', 'recipe_id', req.recipeId)
        .then(results => {
            const notes = removeProperties(results, ['recipe_id']);
            res.status(200).json(notes);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the notes.', error: err.message }));
});

notes.get('/:noteId', validateId('notes', 'noteId'), (req, res) => {
    DB.findById('notes', req.params.noteId)
        .then(result => {
            const note = removeProperties(result, ['recipe_id']);
            res.status(200).json(note);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the note.', error: err.message }));
});

notes.post('/', validateNoteObject, (req, res) => {
    DB.add('notes', req.body)
        .then(result => {
            const newNote = removeProperties(result, ['recipe_id']);
            res.status(201).json(newNote);
        })
        .catch(err => res.status(500).json({ message: 'There was an error adding the note.', error: err.message }));
});

notes.put('/:noteId', validateNoteObject, validateId('notes', 'noteId'), (req, res) => {
    DB.update('notes', req.body, req.params.noteId)
        .then(result => {
            const note = removeProperties(result, ['recipe_id']);
            res.status(200).json(note);
        })
        .catch(err => res.status(500).json({ message: 'There was an error updating the note.', error: err.message }));
});

notes.delete('/:noteId', validateId('notes', 'noteId'), (req, res) => {
    DB.remove('notes', req.params.noteId)
        .then(result => {
            const deletedNote = removeProperties(result, ['recipe_id']);
            res.status(200).json(deletedNote);
        })
        .catch(err => res.status(500).json({ message: 'There was an error deleting the note.', error: err.message }));
});


module.exports = notes;