const mongoose = require("mongoose");
const UrlModel = require("../models/UrlModel");

async function getAllUrls(req,res) {

    const user = req.user;
    
    if(!user) {
        return res.redirect("/login");
    }

    const allUrls = await UrlModel.find({
        createdBy : req.user._id,
    });

    return res.render("home",   {
        urls : allUrls,
    });
}

async function loadOptionsPage(req,res) {

    return res.render("options");
}

async function loadLoginPage(req,res)   {

    return res.render("login",  {
        message : undefined,
    });
}

async function loadSignUpPage(req,res)  {

    return res.render("signup",  {
        message : undefined,
    });
}

module.exports = {getAllUrls, loadOptionsPage, loadSignUpPage, loadLoginPage};
