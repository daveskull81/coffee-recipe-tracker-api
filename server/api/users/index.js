const users = require('express').Router();
const coffees = require('./coffees');
const methods = require('./methods');
const recipes = require('./recipes');

const { addUserId } = require('../../middleware/custom');

users.use('/:userId/coffees', addUserId, coffees);
users.use('/:userId/methods', addUserId, methods);
users.use('/:userId/recipes', addUserId, recipes);

module.exports = users;