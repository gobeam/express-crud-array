const mongoose = require("mongoose");

// connect mongodb database
(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/express-crud", {
      useNewUrlParser: true,
    });
    console.log("Connected with mongodb");
  } catch (error) {
    console.log("There was error connecting with mongodb. Error: ", error);
  }
})();

// register model
require('../model/user');
require('../model/book');

