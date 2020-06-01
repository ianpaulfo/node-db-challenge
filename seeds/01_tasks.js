exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("tasks")
	  .truncate()
	  .then(function() {
		// Inserts seed entries
		return knex("tasks").insert([
		  {
			description: "Daily Workout",
			notes: "circuit train for 45 mins minimum",
			completed: false,
			project_id: 1
		  },
		  {
			description: "Portfolio update",
			notes: "work on portfolio by updating/adding projects",
			completed: false,
			project_id: 3
		  },
		  {
			description: "Weekday writing",
			notes: "write every day before going to bed",
			completed: false,
			project_id: 2
		  },
		  {
			description: "Write a technical blog post",
			notes: "write and publish onlinenk",
			completed: false,
			project_id: 2
		  },
		  {
			description: "Running",
			notes: "run 2 miles twice a week",
			completed: false,
			project_id: 1
		  }
		]);
	  });
  }; 