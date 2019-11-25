exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      coffee_weight: 25.1,
      total_weight: 375,
      bloom: 1,
      bloom_time: 30,
      time_minutes: 2,
      time_seconds: 30,
      grind_size: 'Fine',
      rating: 4,
      water_temp: 210,
      user_id: 1,
      method_id: 1,
      coffee_id: 1
    },
    {
      coffee_weight: 50.1,
      total_weight: 750,
      bloom: 1,
      bloom_time: 45,
      time_minutes: 3,
      time_seconds: 30,
      grind_size: 'Medium',
      rating: 5,
      water_temp: 210,
      user_id: 1,
      method_id: 2,
      coffee_id: 2
    },
    {
      coffee_weight: 50.1,
      total_weight: 750,
      bloom: 0,
      bloom_time: null,
      time_minutes: 6,
      time_seconds: 00,
      grind_size: 'medium-coarse',
      rating: 4,
      water_temp: 210,
      user_id: 1,
      method_id: 3,
      coffee_id: 3
    }
  ]);
};
