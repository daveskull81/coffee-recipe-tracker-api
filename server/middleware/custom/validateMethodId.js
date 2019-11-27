const { DB } = require('../../../utils');

module.exports = (req, res, next) => {
  DB.findById('methods', req.params.methodId)
    .then(method => {
        if (!method) {
            res.status(404).json({ message: 'Invalid Method Id. Method not found.' });
        } else {
            next();
        };
    })
    .catch(err => res.status(500).json({ message: 'There was an error finding the method.', error: err.message }));
};