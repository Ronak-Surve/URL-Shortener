const {setUser, getUser}  = require("../service/authService");

async function checkForLoggedInUser(req , res, next)    {

    const id = req.cookies.uid;

    const user = getUser(id);

    if(!user)   {
        return res.redirect("/login");
    } 
    
    //sending user object in request to fetch urls created by the user only
    req.user = user;
    next();
}

async function checkUserAuth(req,res,next)   {

    const userUid = req.cookies.uid;

    const user = getUser(userUid);

    req.user = user;
    next();
}

module.exports = {checkForLoggedInUser, checkUserAuth};