const express = require("express");
const router = express.Router();
const {
  storeUser,
  getAllUser,
  updateUser,
  destroyUser,
  getUserById
} = require("../controller/user.controller");

router.post("/user", storeUser);
router.get("/user", getAllUser);
router.put("/user/:id", updateUser);
router.delete('/user/:id', destroyUser);
router.get('/user/:id', getUserById);

module.exports = router;
