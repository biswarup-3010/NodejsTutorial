const ConnectDB = require("./ConnectDBS");

const UpdateDB = async (filter, update, isManyUpdate) => {
  let data = await ConnectDB();
  let result;
  if (isManyUpdate == true) {
    result = await data.updateMany(filter, { $set: update });
  } else {
    result = await data.updateOne(filter, { $set: update });
  }
  if (result.acknowledged) {
    console.log("successfull updation of count : ", result.modifiedCount);
  } else {
    console.log("something went wrong... try again...");
  }
};
// let filter = { price: 12000 };
// let update = { price: 10000 };
// UpdateDB(filter, update, true);
module.exports = UpdateDB;
