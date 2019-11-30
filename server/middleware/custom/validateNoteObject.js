module.exports = (req, res, next) => {
    if (req.body.id) {
        res.status(400).json({ message: 'The note object cannot contain the property id. '});
    } else if (!req.body.text) {
        res.status(400).json({ message: 'The note object is missing the text property.' });
    } else if (!req.body.recipe_id) {
        res.status(400).json({ message: 'The note object is missing the recipe_id property.' });
    } else {
        next();
    };
};