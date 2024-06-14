const {setUser, getUser}  = require("../service/authService");

async function checkForLoggedInUser(req , res, next)    {

    const token = req.cookies.token;

    const user = getUser(token);

    if(!user)   {
        return res.redirect("/login");
    } 
    
    //sending user object in request to fetch urls created by the user only
    req.user = user;
    next();
}

async function IdentifyUser(req,res,next)   {

    const token = req.cookies.token;

    const user = getUser(token);

    req.user = user;
    next();
}

function restrictAccessTo(roles = [])    {

    return function (req,res,next)  {

        if(!req.user)    return res.redirect("/login");

        if(!(req.user.role))   return res.end("Role undefined");

        if(!roles.includes(req.user.role))  return res.end("Unauthorized");
        next();
    };
}
module.exports = {checkForLoggedInUser, IdentifyUser, restrictAccessTo};