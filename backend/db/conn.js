const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URL_CONNECTION)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });