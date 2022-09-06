const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const creditcardSchema = new Schema({
  date: { type: String }, //, required:true, unique:true
  sum: { type: Number },
  place: { type: String },
  numacount: { type: Number },
});

module.exports = mongoose.model("Creditcard", creditcardSchema);
