
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 225).notNullable().unique();
        tbl.string('password', 225).notNullable();
        tbl.string('department', 225).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
