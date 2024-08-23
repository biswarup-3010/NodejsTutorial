const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function ConnectDB() {
  let result = await client.connect();
  let db = result.db("e-comm");
  return db.collection("products");
}

module.exports = ConnectDB;

// ConnectDB().then((response) => {
//   response
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
