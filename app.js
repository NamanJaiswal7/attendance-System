var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
require('dotenv').config()

const start = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
     console.log(" Mongoose is connected")
  } catch (error) {
    console.error(error);
  }
};
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection failed: "));
db.once("open",()=>{console.log("Connected to DB")})
start().catch(console.dir);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);

var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
