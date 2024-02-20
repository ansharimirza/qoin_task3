/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Test01', function(table) {
            table.increments('id').primary();
            table.string('nama', 100).notNullable();
            table.smallint('status').notNullable();
            table.dateTime('created').defaultTo(knex.fn.now());
            table.dateTime('updated').defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Test01');
};
