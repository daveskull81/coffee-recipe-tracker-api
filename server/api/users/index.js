const users = require('express').Router();
const coffees = require('./coffees');
const methods = require('./methods');
const recipes = require('./recipes');

const { addParamToReqObj, validateJWT } = require('../../middleware/custom');

users.use('/:userId/coffees', addParamToReqObj('userId'), validateJWT, coffees);
users.use('/:userId/methods', addParamToReqObj('userId'), validateJWT, methods);
users.use('/:userId/recipes', addParamToReqObj('userId'), validateJWT, recipes);

module.exports = users;