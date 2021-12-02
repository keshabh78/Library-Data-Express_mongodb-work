const mongoose = require("mongoose");
const { Schema } = mongoose;

const LibSchema = new Schema({
  Book_Name:  String, // String is shorthand for {type: String}
  Name_of_Issuer: String,
  Due_Date:Date
});

module.exports = mongoose.model("mylabwork",LibSchema,"Lab-12 work")