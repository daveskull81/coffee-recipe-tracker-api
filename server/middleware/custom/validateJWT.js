const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const tokenSecret = process.env.JWT_SECRET || 'coffee';
        jwt.verify(token, tokenSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid credentials.' });
            } else {
                if (decodedToken.userId === Number(req.userId)) {
                    next();
                } else {
                    res.status(401).json({ message: 'Access to this data is unauthorized' });
                };
            };
        });
    } else {
        res.status(400).json({ message: 'No credentials provided.' });
    };
};