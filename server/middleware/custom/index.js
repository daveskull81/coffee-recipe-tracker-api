const validateUserObject = require('./validateUserObject');
const validateJWT = require('./validateJWT');
const validateMethodObject = require('./validateMethodObject');
const validateId = require('./validateId');
const addParamToReqObj = require('./addParamToReqObj');
const validateCoffeeObject = require('./validateCoffeeObject');
const validateRecipeObject = require('./validateRecipeObject');

module.exports = {
    validateUserObject,
    validateJWT,
    validateMethodObject,
    validateId,
    addParamToReqObj,
    validateCoffeeObject,
    validateRecipeObject
};