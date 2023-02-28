const mongoose = require("mongoose");
const BookModel = mongoose.model("Book");

const storeBook = async (req, res) => {
  const data = req.body;
    let book = new BookModel({
        ...data
    });
    await book.save();
    res.status(201).json(book);
};

const getAllBook = async (req, res) => {};

const getBookById = async (req, res) => {};

const updateBook = async (req, res) => {};

const destroyBook = async (req, res) => {};

module.exports = {
  storeBook,
  getAllBook,
  getBookById,
  updateBook,
  destroyBook,
};
