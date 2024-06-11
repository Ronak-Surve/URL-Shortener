const {setUser, getUser}  = require("../service/authService");

async function checkForLoggedInUser(req , res, next)    {

    const id = req.cookies.uid;

    const user = getUser(id);

    if(!user)   {
        return res.redirect("/login");
    } 
    
    next();
}

module.exports = {checkForLoggedInUser};