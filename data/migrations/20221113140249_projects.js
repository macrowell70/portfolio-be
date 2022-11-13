exports.up = function(knex) {
    return knex.schema.createTable("projects", function(projects) {
        projects.increments();
        projects.string("title", 128).notNullable();
        projects.string("thumbnail").notNullable();
        projects.text("description").notNullable();
        projects.string("link").notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects")
};