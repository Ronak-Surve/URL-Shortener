const express = require("express");
const staticControllers = require("../controllers/staticControllers");

const staticRoutes = express.Router();

staticRoutes.route("/")
.get(staticControllers);

module.exports = staticRoutes;