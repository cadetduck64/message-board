const { Router } = require("express");

const details = Router();

details.get("/", (req, res) => {
  console.log(req.body);
  res.render("details.ejs");
});

module.exports = details;
