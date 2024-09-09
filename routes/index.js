const { Router, text } = require("express");

const index = Router();
const ShortUniqueId = require("short-unique-id");
// https://www.npmjs.com/package/short-unique-id

const uid = new ShortUniqueId();
// console.log(uid.rnd());

const messages = [
  // {
  //   id: uid.rnd(),
  //   text: "Hi there!",
  //   user: "Amando",
  //   added: new Date(),
  // },
  // {
  //   id: uid.rnd(),
  //   text: "Hello World!",
  //   user: "Charles",
  //   added: new Date(),
  // },
];

index.get("/", (req, res) => {
  res.render("index", { messageList: messages });
});

//here
index.get("/details/:id", (req, res) => {
  const detailsIndex = messages.findIndex(
    (index) => index.id === req.params.id
  );
  // console.log((messages[detailsIndex]))
  res.render("details", { detail: messages[detailsIndex] });
});

index.post("/newform", (req, res) => {
  console.log(req.body.name);
  while (req.body.message.includes("\r\n\r\n\r\n"))
    req.body.message = req.body.message.replace("\r\n\r\n\r\n", "\r\n\r\n");
  if (req.body.name === "") {
    req.body.name = "Anonymous";
  }
  messages.push({
    id: uid.rnd(),
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
});

module.exports = index;
// module.exports = messages;
