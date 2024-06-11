const mongoose = require("mongoose");
const shortid = require("shortid");
const UrlModel = require("../models/UrlModel");
const { Timestamp } = require("bson");
const userModel = require("../models/userModel");

async function GenerateNewShortURL(req,res) {

    const body = req.body;
    const shortId = shortid();
    console.log(req.user);
    if(!body) return res.status(400).json({error : "url is required"});

    await UrlModel.create({
        shortURL : shortId,
        originalURL : body.url,
        visitHistory : [],
        createdBy : req.user._id,
    });

    return res.render("home",{
        id : shortId,
    })
    // return res.status(200).json({message : "short url created", id : shortId});
}

async function RedirectToOriginalURL(req,res)  {

    const shortId = req.params.shortId;
    console.log(shortId);
    const entry = await UrlModel.findOneAndUpdate(
    {
        shortURL : shortId,
        createdBy : req.user._id,
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
        createdBy : req.user._id,
    })

    return res.json(entry.visitHistory.length);
}

module.exports = {
    GenerateNewShortURL, 
    RedirectToOriginalURL,
    ShowAnalyticsForShortURL,
};
