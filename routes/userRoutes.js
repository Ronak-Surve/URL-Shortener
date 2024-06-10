const express = require("express");
const {handleUserSignUp} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.route("/")
.post(handleUserSignUp);

module.exports = userRoutes;