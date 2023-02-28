const mongoose = require("mongoose");
const BookModel = mongoose.model("Book");

const storeBook = async (req, res) => {
  const data = req.body;
  let book = new BookModel({
    ...data,
  });
  await book.save();
  res.status(201).json(book);
};

const getAllBook = async (req, res) => {
  const books = await BookModel.find();
  res.status(200).json(books);
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await BookModel.findById(id);
  res.status(200).json(book);
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await BookModel.findOneAndUpdate({ _id: id }, data);
  res.status(200).json(result);
};

const destroyBook = async (req, res) => {
  const id = req.params.id;
  await BookModel.findByIdAndDelete(id);
  res.status(204).json();
};

module.exports = {
  storeBook,
  getAllBook,
  getBookById,
  updateBook,
  destroyBook,
};
