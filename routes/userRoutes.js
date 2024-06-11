const express = require("express");
const {handleUserSignUp, handleUserLogin} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.route("/signup")
.post(handleUserSignUp);

userRoutes.route("/login")
.post(handleUserLogin);

module.exports = userRoutes;