const express = require("express");
const router = express.Router();
const {
  storeUser,
  getAllUser,
  updateUser,
  destroyUser,
  getUserById,
} = require("../controller/user.controller");
const {
  storeBook,
  getAllBook,
  getBookById,
  updateBook,
  destroyBook,
} = require("../controller/book.controller");

const { bookValidator } = require("../validator/book-store.validator");
const {
  userRegisterMiddleware,
} = require("../validator/user-register.validator");

router.post("/user", userRegisterMiddleware, storeUser);
router.get("/user", getAllUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", destroyUser);
router.get("/user/:id", getUserById);

router.post("/book", bookValidator, storeBook);
router.get("/book", getAllBook);
router.get("/book/:id", getBookById);
router.put("/book/:id", updateBook);
router.delete("/book/:id", destroyBook);

module.exports = router;
