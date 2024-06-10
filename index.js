//modules
const express = require("express");
const path = require("path");
const dotenv = require('dotenv').config();

//routes
const urlRoutes = require("./routes/urlRoutes");
const staticRoutes = require("./routes/staticRoutes")
const userRoutes = require("./routes/userRoutes");

//connections
const connectMongoDB = require("./connection");

const app = express();

connectMongoDB(process.env.DB_URL)
.then(() => {console.log("MongoDB connected")})
.catch((err) => {console.log("MongoDB error", err)})

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"))

app.use("/url", urlRoutes);
app.use("/user", userRoutes);
app.use("/", staticRoutes);

app.listen(process.env.PORT, () =>  {console.log(`server running on PORT ${process.env.PORT}`)});