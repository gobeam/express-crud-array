const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  totalPages: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Book", BookSchema);
