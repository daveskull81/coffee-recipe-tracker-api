const methods = require('express').Router();
const { DB, removeProperties } = require('../../../../utils');
const { validateMethodObject, validateId } = require('../../../middleware/custom');

methods.get('/', (req, res) => {
    DB.search('methods', 'user_id', req.userId)
        .then(results => {
            const methods = removeProperties(results, ['user_id']);
            res.status(200).json(methods);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the user\'s methods.', error: err.message }));
});

methods.post('/', validateMethodObject, (req, res) => {
    DB.add('methods', req.body)
        .then(result => {
            const newMethod = removeProperties(result, ['user_id']);
            res.status(201).json(newMethod);
        })
        .catch(err => res.status(500).json({ message: 'There was an error adding the new method.', error: err.message }));
});

methods.get('/:methodId', validateId('methods', 'methodId'), (req, res) => {
    DB.findById('methods', req.params.methodId)
        .then(result => {
            const method = removeProperties(result, ['user_id']);
            res.status(200).json(method);
        })
        .catch(err => res.status(500).json({ message: 'There was an error getting the method for the user.', error: err.message }));
});

methods.put('/:methodId', validateMethodObject, validateId('methods', 'methodId'), (req, res) => {
    DB.update('methods', req.body, req.params.methodId)
        .then(result => {
            const method = removeProperties(result, ['user_id']);
            res.status(200).json(method);
        })
        .catch(err => res.status(500).json({ message: 'There was an error updating the method.', error: err.message }));
});

methods.delete('/:methodId', validateId('methods', 'methodId'), (req, res) => {
    DB.remove('methods', req.params.methodId)
        .then(result => {
            const deletedMethod = removeProperties(result, ['user_id']);
            res.status(200).json(deletedMethod);
        })
        .catch(err => res.status(500).json({ message: 'There was an error deleting the method.', error: err.message }));
});

module.exports = methods;