// const sessionIdToUserMap = new Map();

// function setUser(id,user)  {

//     sessionIdToUserMap.set(id,user);
// }

// function getUser(id)    {

//     return sessionIdToUserMap.get(id);
// }
//stateful based auth

const jwt = require("jsonwebtoken");
const secretKey = "Ronak@12345";

function setUser(user)  {

    return jwt.sign({
        email : user.email,
        _id : user._id,
        role : user.role,
    }, secretKey);
}

function getUser(token) {

    if(!token)  return null;
    try {
        return jwt.verify(token, secretKey);
    }
    catch(err)  {
        return null;
    }
    
}

module.exports = {setUser, getUser};

