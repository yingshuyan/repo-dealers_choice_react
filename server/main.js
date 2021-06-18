const express = require("express");
const app = require("./index");

const port = 3000;
app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
