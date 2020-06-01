exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Coding for Dummies", description: "book by Nikhil Abraham" },
        { name: "War of Art", description: "book by Steven Pressfield" },
        { name: "Encyclopedia of modern bodybuilding", description: "book by Arnold Schwarzenegger " },
        { name: "Pen/Paper", description: "weapons for war of creation" }
      ]);
    });
};
