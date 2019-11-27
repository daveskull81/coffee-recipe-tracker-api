module.exports = (req, res, next) => {
    if (req.body.id) {
        res.status(400).json({ message: 'The coffee object cannot contain the property id. '});
    } else if (!req.body.roaster) {
        res.status(400).json({ message: 'The coffee object is missing the roaster property.' });
    } else if (!req.body.user_id) {
        res.status(400).json({ message: 'The coffee object is missing the user_id property.' });
    } else {
        next();
    };
};