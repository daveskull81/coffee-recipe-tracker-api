module.exports = (req, res, next) => {
    if (req.body.id) {
        res.status(400).json({ message: 'The recipe object cannot contain the property id. '});
    } else if (!req.body.name) {
        res.status(400).json({ message: 'The recipe object is missing the name property.' });
    } else if (!req.body.user_id) {
        res.status(400).json({ message: 'The recipe object is missing the user_id property.' });
    } else {
        next();
    };
};