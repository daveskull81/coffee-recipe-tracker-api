module.exports = (req, res, next) => {
    req.recipeId = req.params.recipeId;
    next();
};