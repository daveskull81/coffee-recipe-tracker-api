const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
    return knex('users').insert([
      { username: 'dave', password: bcrypt.hashSync('pass', 10) }
    ]);
};
