const express = require("express");
// const path = require("path");

const app = express();

const requestFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Enter Your Age First...");
  } else if (req.query.age < 18) {
    resp.send("You Can't Access...");
  } else {
    next();
  }
};
app.use(requestFilter);
// const pubPath = path.join(__dirname, "public");
// app.use(express.static(pubPath));
app.get("/", (req, res) => {
  res.send("Hello This is Home page...");
});
app.get("/about", (req, res) => {
  res.send("Hello This is About page...");
});
app.get("/contact", (req, res) => {
  res.send(`<h1>Hello, ${req.query.name} This is hello page...</h1>`);
});
app.listen(8500);
