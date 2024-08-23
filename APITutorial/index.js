const express = require("express");

require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());
// app.get("/", async(req, res) => {
//     res.send(Product.find());
//   });
app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send("result");
});

app.listen(6500);
