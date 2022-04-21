module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", users.create);

  // Create more new Users
  router.post("/more", users.createMore);

  // Retrieve all Users
  router.get("/", users.findAll);

  // Retrieve a single User with id
  router.get("/:id", users.findOne);

  // Update an User with id
  router.put("/:id", users.update);

  // Delete an User with id
  router.delete("/:id", users.delete);

  // Delete all Users
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
