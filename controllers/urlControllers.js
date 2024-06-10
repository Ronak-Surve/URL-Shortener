const mongoose = require("mongoose");
const shortid = require("shortid");
const UrlModel = require("../models/UrlModel");
const { Timestamp } = require("bson");

async function GenerateNewShortURL(req,res) {

    const body = req.body;
    const shortId = shortid();
    if(!req.body) return res.status(400).json({error : "url is required"});

    await urlModel.create({
        shortURL : shortId,
        originalURL : body.url,
        visitHistory : [],
    });

    return res.render("home",{
        id : shortId,
    })
    // return res.status(200).json({message : "short url created", id : shortId});
}

async function RedirectToOriginalURL(req,res)  {

    const shortId = req.params.shortId;
    const entry = await UrlModel.findOneAndUpdate(
    {
        shortURL : shortId,
    },
    {
        $push:  {
            visitHistory : {
                timestamp : Date.now(),
            },
        },
    }
    );

    return res.redirect(entry.originalURL);
}

async function ShowAnalyticsForShortURL(req,res)    {

    const shortId = req.params.shortId;
    const entry = await UrlModel.findOne({
        shortURL : shortId,
    })

    return res.json(entry.visitHistory.length);
}

module.exports = {
    GenerateNewShortURL, 
    RedirectToOriginalURL,
    ShowAnalyticsForShortURL,
};
