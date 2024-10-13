const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));

//allows ejs functionality
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//allows static assests (CSS, etc)
const assetsPath = path.join(__dirname, "/public");
app.use(express.static(assetsPath));

const index = require("./routes/index.js");
const newForm = require("./routes/newform.js");
const details = require("./routes/details.js");

app.use("/", index);
app.use("/newform", newForm);
app.use("/details", details);

const PORT = 10000;

app.listen(PORT, () => {
  console.log("app running");
});
