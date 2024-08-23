const ConnectDB = require("./Backend/ConnectDBS");
const main = async () => {
  let data = await ConnectDB();
  data = await data.find().toArray();
  console.warn(data);
};
main();
