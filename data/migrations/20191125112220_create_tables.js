exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255).notNullable().notUnique();
      tbl.string('password', 255).notNullable();
  })
  .createTable('coffees', tbl => {
      tbl.increments();
      tbl.string('name', 255);
      tbl.string('roaster', 255).notNullable();
      tbl.string('country_of_origin', 255);
      tbl.string('region', 255);
      tbl.string('processing_method', 255);
      tbl.string('roast_level', 255);
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
  .createTable('methods', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.float('coffee_weight');
      tbl.float('total_weight');
      tbl.integer('bloom');
      tbl.integer('bloom_time');
      tbl.integer('time_minutes');
      tbl.integer('time_seconds');
      tbl.string('grind_size');
      tbl.integer('rating');
      tbl.float('water_temp');
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('coffee_id')
        .unsigned()
        .references('id')
        .inTable('coffees')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('method_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('methods')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('notes', tbl => {
      tbl.increments();
      tbl.string('text', 2000);
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists('notes')
    .dropTableIfExists('recipes')
    .dropTableIfExists('methods')
    .dropTableIfExists('coffees')
    .dropTableIfExists('users');
};
