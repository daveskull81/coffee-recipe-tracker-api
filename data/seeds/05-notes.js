exports.seed = function(knex) {
  return knex('notes').insert([
    {
      text: 'Came out great!',
      recipe_id: 1
    },
    {
      text: 'I can taste the flavor notes.',
      recipe_id: 1
    },
    {
      text: 'Almost perfect on first try.',
      recipe_id: 2
    },
    {
      text: 'Should try going finer on grind to see if I can extract more.',
      recipe_id: 2
    },
    {
      text: 'Great stuff. Do this again.',
      recipe_id: 3
    }
  ]);
};
