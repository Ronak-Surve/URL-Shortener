const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const {setUser, getUser} = require("../service/authService");
const { v4: uuidv4 } = require('uuid');

async function handleUserSignUp(req,res)    {

    const body = req.body;

    if(!body.name || !body.email || !body.password) {
        return res.render("signup", {
            message : "All fields are required",
        });
    }

    await userModel.create({
        name : body.name,
        email : body.email,
        password : body.password,
    });

    return res.redirect("/");
}

async function handleUserLogin(req,res) {

    const body = req.body;

    const user = await userModel.findOne({
        email : body.email,
        password : body.password,
    });

    if(!user)   {
        return res.render("login",  {
            error : "Invalid username or password",
        });
    }
    
    // const sessionId = uuidv4();

    // setUser(sessionId,user);

    // res.cookie("uid", sessionId);

    const token = setUser(user);

    res.cookie("token", token);

    return res.redirect("/home");
}

module.exports = {handleUserSignUp, handleUserLogin};