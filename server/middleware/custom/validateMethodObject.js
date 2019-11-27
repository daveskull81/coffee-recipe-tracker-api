module.exports = (req, res, next) => {
    if (req.body.id) {
        res.status(400).json({ message: 'The method object cannot contain the property id. '});
    }

    if (!req.body.name) {
        res.status(400).json({ message: 'The method object is missing the name property.' });
    }
    next();
};