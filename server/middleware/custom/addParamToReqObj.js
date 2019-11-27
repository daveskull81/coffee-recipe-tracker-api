module.exports = (param) => {
    return (req, res, next) => {
        req[param] = req.params[param];
        next();
    };
};