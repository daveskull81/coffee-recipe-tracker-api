const users = require('express').Router();
const coffees = require('./coffees');
const methods = require('./methods');
const recipes = require('./recipes');

const { addUserId, validateJWT } = require('../../middleware/custom');

users.use('/:userId/coffees', addUserId, validateJWT, coffees);
users.use('/:userId/methods', addUserId, validateJWT, methods);
users.use('/:userId/recipes', addUserId, validateJWT, recipes);

module.exports = users;