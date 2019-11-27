const auth = require('express').Router();
const bcrypt = require('bcryptjs');
const { generateJWT, DB } = require('../../../utils');
const { validateUser } = require('../../middleware/custom');

auth.post('/login', validateUser, (req, res) => {
    const { username, password } = req.body;

    DB.search('users', 'username', username)
        .then(results => {
            const [ user ] = results;
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateJWT(user.id);
                res.status(200).json({ id: user.id, username: user.username, token });
            } else {
                res.status(401).json({ message: 'Invalid credentials. Check username and password.' });
            };
        })
        .catch(err => res.status(500).json({ message: 'There was an error logging in the user.', error: err.message }));
});

auth.post('/register', validateUser, (req, res) => {
    const newUser = req.body;
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPassword;

    DB.add('users',newUser)
        .then(savedUser => {
            const token = generateJWT(savedUser.id);
            res.status(201).json({ id: savedUser.id, username: savedUser.username, token });
        })
        .catch(err => res.status(500).json({ message: 'There was an error saving the user.', error: err.message }));
});

module.exports = auth;