const { Router, text } = require("express");

const index = Router();
const ShortUniqueId = require("short-unique-id");
// https://www.npmjs.com/package/short-unique-id
const indexController = require('../controllers/indexController.js')

const uid = new ShortUniqueId();
console.log(uid.rnd());

index.get("/", async (req, res) => {
  const messages = await indexController.getAllMessagesController(req, res)
  res.render("index", { messageList: messages.rows });
});

//here
index.get("/details/:id", async (req, res) => {
  const detailsIndex = await indexController.getMessageDetailController(req, res)
  console.log(detailsIndex.rows)
  res.render("details", { detail: detailsIndex.rows[0] });

});

index.post("/newform", (req, res) => {
  console.log(req.body)
  // console.log(req.body.name);
  while (req.body.message.includes("\r\n\r\n\r\n") )
  req.body.message = req.body.message.replace("\r\n\r\n\r\n","\r\n\r\n");
  if (req.body.name === '')
  {req.body.name = 'Anonymous'}
  req.body.id = uid.rnd()
  req.body.added = new Date()
  indexController.newMessageController(req.body)
  res.redirect("/");
});

module.exports = index;

