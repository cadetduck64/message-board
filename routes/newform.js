const { Router } = require("express");

const newForm = Router();

newForm.get("/", (req, res) => {
  res.render("newform");
});

module.exports = newForm;
