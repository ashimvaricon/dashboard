const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema({
  productsName: { type: String, required: true },
  category: { type: String },
  brand: { type: String },
  price: { type: String },
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
