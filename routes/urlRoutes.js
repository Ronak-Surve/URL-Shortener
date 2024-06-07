const express = require("express");
const {GenerateNewShortURL} = require("../controllers/urlControllers.js")

const urlRouter = express.Router();

urlRouter.route("/")
.post(GenerateNewShortURL);

urlRouter.route("/:short_id")
.get(GenerateNewShortURL)

urlRouter.route("/:short_id/analytics")
.get(GenerateNewShortURL);

module.exports = urlRouter;
