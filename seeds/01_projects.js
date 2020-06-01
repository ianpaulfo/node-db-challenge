
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name:"Workout",
          description: "45 minute workout per day",
          completed: false
        },
        {
          name: "Writing",
          description: "1 journal entry a day",
          completed: false
        },
        {
          name: "Coding",
          description: "20 hours of coding per week",
          completed: false
        }
      ]);
    });
};
