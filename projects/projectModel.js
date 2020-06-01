const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  addProject,
  addResource,
  addTask
};

// get projects
function getProjects() {
  return db("projects");
}

// get resources
function getResources() {
  return db("resources");
}

// get tasts: w/project name and project description
function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "t.project_id",
      "p.name",
      "p.description",
      "t.id",
      "t.description",
      "t.notes",
      "t.completed"
    );
}

// add projects
function addProject(project) {
  return db("projects").insert(project);
}
function addResource(resource) {
  return db("resources").insert(resource);
}
function addTask(task) {
  return db("tasks").insert(task);
}