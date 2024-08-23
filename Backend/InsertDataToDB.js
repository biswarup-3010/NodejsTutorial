const DbConnection = require("./ConnectDBS");

const InsertData = async (arr) => {
  const db = await DbConnection();
  const result = await db.insertMany(arr);
  if (result.acknowledged) {
    console.log("Data inserted successfully...");
  } else {
    console.log("something went wrong try again...");
  }
};

module.exports = InsertData;
