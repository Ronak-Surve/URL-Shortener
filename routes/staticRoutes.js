const express = require("express");

const staticRoutes = express.Router();

staticRoutes.get("/", (req,res) =>  {
    return res.render("home");
})

module.exports = staticRoutes;