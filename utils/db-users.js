const db = require('../data/db-config');

async function add(user) {
    const [ id ] = await db('users').insert(user, 'id');

    return findById(id);
};

function findById(userId) {
    return db('users').select('id', 'username')
        .where('id', userId)
        .first();
};

function findByUserNameForLogin(userName) {
    return db('users').select('id', 'username', 'password')
        .where('username', userName)
        .first();
};

module.exports = {
    add,
    findById,
    findByUserNameForLogin
};