const users = require('express').Router();
const coffees = require('./coffees');
const methods = require('./methods');
const recipes = require('./recipes');

users.use('/:userId/coffees', coffees);
users.use('/:userId/methods', methods);
users.use('/:userId/recipes', recipes);

module.exports = users;