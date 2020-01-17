const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/products');

router.get('/', async (req, res) => {
  try {
    const pageLimit = 8;
    const {
      name,
      page = 0,
      priceMax,
      priceMin,
    } = req.query;

    const condition = {};
    if (name) condition.name = new RegExp(name, 'i');
    if (priceMax || priceMin) condition.price = {};
    if (priceMax) condition.price['$lt'] = priceMax;
    if (priceMin) condition.price['$gt'] = priceMin;

    const productList = await ProductsModel.find(condition).skip(page * pageLimit).limit(pageLimit);
    res.status(200).send(productList);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
