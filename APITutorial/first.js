const express = require("express");
const dbConnection = require("../Backend/ConnectDBS");
const dbUpdate = require("../Backend/UpdateDB");
const app = express();
const insertData = require("../Backend/InsertDataToDB");

app.use(express.json());

app.get("/", async (_, resp) => {
  let data = await (await dbConnection()).find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", (req, resp) => {
  //   console.log(req.body);
  insertData([req.body]);
  resp.send(req.body);
});

app.put("/", (req, resp) => {
  console.log(req.body);
  let filter = req.body[0];
  let updatation = req.body[1];
  let isMany = req.body[2];
  dbUpdate(filter, updatation, isMany);
  resp.send(req.body);
});
app.listen(8500);
