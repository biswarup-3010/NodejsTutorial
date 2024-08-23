const ConnectDB = require("./ConnectDBS");

const DeleteDataDB = async (filter, isManyUpdate) => {
  let data = await ConnectDB();
  let result;
  if (isManyUpdate == true) {
    result = await data.deleteMany(filter);
  } else {
    result = await data.deleteOne(filter);
  }
  if (result.acknowledged) {
    console.log("successfull deletion of count : ", result.deletedCount);
  } else {
    console.log("something went wrong... try again...");
  }
};
// let filter = { price: 156000 };
// DeleteDataDB(filter, true);
module.exports = DeleteDataDB;
