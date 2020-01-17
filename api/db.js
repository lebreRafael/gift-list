const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:my-ideas-pool@cluster0-ighq3.mongodb.net/gift-list?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
