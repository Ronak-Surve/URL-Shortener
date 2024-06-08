const express = require("express");
const {GenerateNewShortURL, RedirectToOriginalURL,ShowAnalyticsForShortURL,getAllEntries} = require("../controllers/urlControllers.js")

const urlRouter = express.Router();

urlRouter.route("/")
.post(GenerateNewShortURL)
.get(getAllEntries);

urlRouter.route("/:shortId")
.get(RedirectToOriginalURL)

urlRouter.route("/:shortId/analytics")
.get(ShowAnalyticsForShortURL);

module.exports = urlRouter;
