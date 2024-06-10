const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");

async function handleUserSignUp(req,res)    {

    const body = req.body;

    await userModel.create({
        name : body.name,
        email : body.email,
        password : body.password,
    });

    return res.render("home");
}

module.exports = {handleUserSignUp};