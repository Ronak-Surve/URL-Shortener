const mongoose = require("mongoose");
const urlModel = require("../models/UrlModel");
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

    return res.status(200).json({message : "short url created", id : shortId});
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

    res.redirect(entry.originalURL);
}

async function ShowAnalyticsForShortURL(req,res)    {

    const shortId = req.params.shortId;
    const entry = await UrlModel.findOne({
        shortURL : shortId,
    })

    res.json(entry.visitHistory.length);
}

async function getAllEntries(req,res) {

    const allUrls = await UrlModel.find({});

    return res.render("home");
}


module.exports = {
    GenerateNewShortURL, 
    RedirectToOriginalURL,
    ShowAnalyticsForShortURL,
    getAllEntries,
};




// `
//         <html>
//             <head></head>
//             <body>
//                 <ol>
//                     ${allUrls.map((url) => `<li> ${url.shortURL} - ${url.originalURL} - ${url.visitHistory.length}`)}    
//                 </ol>
//             </body>
//     `

