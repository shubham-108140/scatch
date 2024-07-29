const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(function () {
    console.log("connected");
  })
  .catch(function (err) {
    console.log(err);
  });

//just that we get full control /power form the module
module.exports = mongoose.connection;
