const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser);

router.route("/:id")
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router;