exports.seed = function(knex) {
  return knex('methods').insert([
    { name: 'v60', user_id: 1},
    { name: 'Chemex', user_id: 1},
    { name: 'French Press', user_id: 1}
  ]);
};
