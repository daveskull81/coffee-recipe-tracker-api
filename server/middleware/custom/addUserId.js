module.exports = (req, res, next) => {
    req.userId = req.params.userId;
    next();
};