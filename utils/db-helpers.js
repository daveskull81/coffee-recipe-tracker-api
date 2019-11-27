const db = require('../data/db-config');

const add = async (tbl, newItem) => {
    const [ id ] = await db(tbl).insert(newItem, 'id');

    return findById(tbl, id );
};

const findById = (tbl, id) => {
    return db(tbl)
            .where('id', id)
            .first();
};

const findAll = (tbl) => {
    return db(tbl);
};

const search = (tbl, field, value) => {
    return db(tbl)
            .where(field, value);
};

const update = (tbl, updates, id) => {
    return db(tbl)
            .where('id', id)
            .update(updates)
            .then(() => findById(tbl, id));
};

const remove = async (tbl, id) => {
    const removedItem = await findById(tbl, id);

    return db(tbl)
            .where('id', id)
            .del()
            .then(() => removedItem);
};

module.exports = {
    add,
    findById,
    findAll,
    update,
    remove,
    search
};