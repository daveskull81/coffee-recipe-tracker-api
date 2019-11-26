const knex = require('knex');
const config = require('../knexfile');
const dbEnv = process.env.NODE_ENV;

module.exports = knex(config[dbEnv]);