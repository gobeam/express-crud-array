const mongoose = require("mongoose");

// connect mongodb database
(async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
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

