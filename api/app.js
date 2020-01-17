const express = require('express');
const cors = require('cors');
const app = express();

const productsRouter = require('./routes/products');

app.use(cors());

app.use('/products', productsRouter);

const port = 8080;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
