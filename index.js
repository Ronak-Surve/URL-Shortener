const express = require("express");
const path = require("path");
const urlRoutes = require("./routes/urlRoutes");
const staticRoutes = require("./routes/staticRoutes")
const connectMongoDB = require("./connection");

const app = express();

const PORT = 8005;
const MongoDBUrl = "mongodb://127.0.0.1:27017/URL-DB";

connectMongoDB(MongoDBUrl)
.then(() => {console.log("MongoDB connected")})
.catch((err) => {console.log("MongoDB error", err)})

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use("/url", urlRoutes);
app.use("/", staticRoutes);

app.listen(PORT, () =>  {console.log(`server running on PORT ${PORT}`)});