const mongoose = require("mongoose");
const connectDB = require("../Backend/ConnectDBS");
const express = require("express");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const SaveInDB = async (arr) => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const productModel = mongoose.model("products", ProductSchema);
  let data = new productModel(arr);
  let result = await data.save();
  console.log(result);
};

const UpdateInDB = async (filter, update, isMany) => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const Product = mongoose.model("products", ProductSchema);
  let data;
  if (isMany === true) {
    data = await Product.updateMany(filter, { $set: update });
  } else {
    data = await Product.updateOne(filter, { $set: update });
  }
  if (data.acknowledged) {
    console.log("updated successfully of items : ", data.matchedCount);
  } else {
    console.log("something went wrong...");
  }
};
const DeleteInDB = async (filter, isMany) => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const Product = mongoose.model("products", ProductSchema);
  let data;
  if (isMany === true) {
    data = await Product.deleteMany(filter);
  } else {
    data = await Product.deleteOne(filter);
  }
  if (data.acknowledged) {
    console.log("updated successfully of items : ", data.deletedCount);
  } else {
    console.log("something went wrong...");
  }
};

const main = () => {
  //   data.forEach(SaveInDB);
  let filter = { name: "Mustered Oil" };
  let update = { price: 45000 };
  DeleteInDB(filter, false);
  const app = express();
  app.get("/", async (req, resp) => {
    let data = await (await connectDB()).find().toArray();
    resp.send(data);
  });

  app.listen(8500);
};
main();

const data = [
  {
    name: "Mustered Oil",
    price: 500,
    brand: "Safola Gold",
    category: "Groccery",
  },
  {
    name: "Sunflower Oil",
    price: 450,
    brand: "Saffola",
    category: "Groccery",
  },
  {
    name: "Olive Oil",
    price: 1200,
    brand: "Bertolli",
    category: "Groccery",
  },
  {
    name: "Coconut Oil",
    price: 600,
    brand: "Parachute",
    category: "Groccery",
  },
  {
    name: "Rice Bran Oil",
    price: 550,
    brand: "Dhara",
    category: "Groccery",
  },
  {
    name: "Groundnut Oil",
    price: 700,
    brand: "Fortune",
    category: "Groccery",
  },
  {
    name: "Soybean Oil",
    price: 480,
    brand: "Nature Fresh",
    category: "Groccery",
  },
  {
    name: "Corn Oil",
    price: 520,
    brand: "Godrej",
    category: "Groccery",
  },
  {
    name: "Avocado Oil",
    price: 1500,
    brand: "Chosen Foods",
    category: "Groccery",
  },
  {
    name: "Canola Oil",
    price: 500,
    brand: "Kirkland",
    category: "Groccery",
  },
  {
    name: "Palm Oil",
    price: 550,
    brand: "Dalda",
    category: "Groccery",
  },
  {
    name: "Grapeseed Oil",
    price: 700,
    brand: "La Tourangelle",
    category: "Groccery",
  },
  {
    name: "Sesame Oil",
    price: 600,
    brand: "Seseame",
    category: "Groccery",
  },
  {
    name: "Almond Oil",
    price: 2000,
    brand: "Pure",
    category: "Groccery",
  },
  {
    name: "Truffle Oil",
    price: 3000,
    brand: "Sabatino",
    category: "Groccery",
  },
];
