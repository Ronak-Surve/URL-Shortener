const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({

    shortURL :  {
        type : String,
        required : true,
        unique : true,
    },
    originalURL :   {
        type : String,
        required : true,
    },
    visitHistory :  [{
        visitCount : {
            type : Number,
        }
    }],
    createdBy :   {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : "users",
    }
}, {timestamps : true}
);

const UrlModel = mongoose.model("url", urlSchema);

module.exports = UrlModel;