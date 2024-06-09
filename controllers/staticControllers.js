const mongoose = require("mongoose");
const UrlModel = require("../models/UrlModel");

async function getAllUrls(req,res) {

    const allUrls = await UrlModel.find({});

    return res.render("home",   {
        urls : allUrls,
    });
}

module.exports = getAllUrls;
