const express = require("express");
const urlRoutes = require("./routes/urlRoutes");
const connectMongoDB = require("./connection");

const app = express();

const PORT = 8005;
const MongoDBUrl = "mongodb://127.0.0.1:27017/URL-DB";

connectMongoDB(MongoDBUrl)
.then(() => {console.log("MongoDB connected")})
.catch((err) => {console.log("MongoDB error", err)})

app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoutes)

app.listen(PORT, () =>  {console.log(`server running on PORT ${PORT}`)});