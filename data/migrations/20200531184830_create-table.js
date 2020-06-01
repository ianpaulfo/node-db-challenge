
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.incremets();
    tbl.string("name").notNullable();
    tbl.string("description");
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  
};
