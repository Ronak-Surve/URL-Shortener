const mongoose = require("mongoose");

async function connectMongoDB(MongoDBUrl)   {

    await mongoose.connect(MongoDBUrl);
}

module.exports = connectMongoDB;