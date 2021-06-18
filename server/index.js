const express = require("express");
const app = express();
const path = require("path");

//redirect all routes to api
app.use("api/", require("./api"));
