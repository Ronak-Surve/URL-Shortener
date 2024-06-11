const express = require("express");
const {getAllUrls, loadOptionsPage, loadSignUpPage, loadLoginPage} = require("../controllers/staticControllers");

const staticRoutes = express.Router();

staticRoutes.route("/")
.get(getAllUrls);

staticRoutes.route("/options")
.get(loadOptionsPage);

staticRoutes.route("/signup")
.get(loadSignUpPage);

staticRoutes.route("/login")
.get(loadLoginPage);

module.exports = staticRoutes;