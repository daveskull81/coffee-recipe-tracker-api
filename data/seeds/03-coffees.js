exports.seed = function(knex) {
  return knex('coffees').insert([
    {
      name: 'Tamiru Genale Natural Process',
      roaster: 'MatchBook Coffee Project',
      country_of_origin: 'Ethiopia',
      region: 'Guji',
      processing_method: 'Natural',
      roast_level: 'Light',
      user_id: 1
    },
    {
      name: 'Women in Coffee Project',
      roaster: 'Matchbook Coffee Project',
      country_of_origin: 'Nicaragua',
      region: 'Matagalpa',
      processing_method: 'Pulped Natural',
      roast_level: 'Medium',
      user_id: 1
    },
    {
      name: 'Monteverde Washed & Honey',
      roaster: 'Matchbook Coffee Project',
      country_of_origin: 'Colombia',
      region: 'Tolima',
      processing_method: 'Honey & Washed',
      roast_level: 'Light',
      user_id: 1
    }
  ]);
};
