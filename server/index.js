const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "public")));

//redirect all routes to api
app.use("/api", require("./api"));

// send the htmlfile to the user
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client/index.html"));
});

module.exports = app;
