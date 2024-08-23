// const app = require("./App");
// console.log(app);
// const arr = [1, 2, 3, 4, 5, 6];
// arr.filter((item) => {
//   if (item % 2) console.log(item);
// });

const fs = require("fs");
const col = require("colors");
const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
  console.log("File added succesfully");
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
  console.log("File removed");
} else {
  console.warn(col.red("Something went wrong... try again..."));
}
// fs.writeFileSync("hello.txt", "hi");
