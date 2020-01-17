const mongoose = require('../db');
const Schema = mongoose.Schema;

const Model = new Schema({
  image: String,
  name: String,
  price: Number,
});

module.exports = mongoose.model('products', Model);
