const express = require("express");
const {getAllUrls, loadSignUpPage} = require("../controllers/staticControllers");

const staticRoutes = express.Router();

console.log("hello")

staticRoutes.route("/")
.get(getAllUrls);

staticRoutes.route("/signup")
.get(loadSignUpPage);

module.exports = staticRoutes;