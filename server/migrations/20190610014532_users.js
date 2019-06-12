exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.string('uid', 128)
            .primary()
            .notNullable()
            .unique()
        tbl.string('username', 16)
            .notNullable()
            .unique()
        tbl.string('password')
            .notNullable()
        tbl.string('department', 128)
            .notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}