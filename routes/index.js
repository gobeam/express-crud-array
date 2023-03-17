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
const { login, getProfile } = require("../controller/auth.controller");

const { bookValidator } = require("../validator/book-store.validator");
const {
  userRegisterMiddleware,
} = require("../validator/user-register.validator");

const { loginValidator } = require("../validator/login.validator");
const {
  authenticateMiddleware,
} = require("../middleware/authentication.middleware");
router.post("/auth/login", loginValidator, login);
router.get("/profile",authenticateMiddleware, getProfile);
router.post("/user", userRegisterMiddleware, storeUser);
router.get("/user",authenticateMiddleware, getAllUser);
router.put("/user/:id",authenticateMiddleware, updateUser);
router.delete("/user/:id",authenticateMiddleware, destroyUser);
router.get("/user/:id",authenticateMiddleware, getUserById);

router.post("/book", authenticateMiddleware, bookValidator, storeBook);
router.get("/book", authenticateMiddleware, getAllBook);
router.get("/book/:id", authenticateMiddleware, getBookById);
router.put("/book/:id", authenticateMiddleware, updateBook);
router.delete("/book/:id", authenticateMiddleware, destroyBook);

module.exports = router;
