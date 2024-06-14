const express = require("express");
const {getAllUrls, loadOptionsPage, loadSignUpPage, loadLoginPage} = require("../controllers/staticControllers");
const { restrictAccessTo } = require("../middlewares/authMiddleware");

const staticRoutes = express.Router();

staticRoutes.route("/")
.get(loadOptionsPage)
.post(loadOptionsPage)

staticRoutes.route("/home", restrictAccessTo(["NORMAL"]))
.get(getAllUrls);

staticRoutes.route("/signup")
.get(loadSignUpPage);

staticRoutes.route("/login")
.get(loadLoginPage);

module.exports = staticRoutes;