const mongoose = require("mongoose");
const urlModel = require("../models/UrlModel");
const shortid = require("shortid");

async function GenerateNewShortURL(req,res) {

    const body = req.body;
    const shortId = shortid();
    if(!req.body) return res.status(400).json({error : "url is required"});

    await urlModel.create({
        shortURL : shortId,
        originalURL : body.url,
        visitHistory : [],
    })

    return res.status(200).json({message : "short url created", id : shortId});
}

module.exports = {GenerateNewShortURL};


