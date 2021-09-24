const express = require("express");
const axios = require("axios");

const demo = express();
const port = 3500;

// Cross-Origin Resource Sharing
demo.all("*", (_, res, next) => {
  res.header("Access-Control-Allow-Origin", `*`);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");

  next();
});

demo.get("/quickData", (req, res) => {
  // TODO
  return res.send({
    data: 'get it'
  });
});

demo.listen(port, () => console.log(`Listening on port ${port}`));
