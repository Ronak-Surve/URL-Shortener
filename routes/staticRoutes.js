const express = require("express");
const {getAllUrls, loadOptionsPage, loadSignUpPage, loadLoginPage} = require("../controllers/staticControllers");

const staticRoutes = express.Router();

staticRoutes.route("/")
.get(loadOptionsPage)
.post(loadOptionsPage)

staticRoutes.route("/home")
.get(getAllUrls);

staticRoutes.route("/signup")
.get(loadSignUpPage);

staticRoutes.route("/login")
.get(loadLoginPage);

module.exports = staticRoutes;