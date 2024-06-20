// server/models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  company:String,
  name:String,
  street:String,
  address:String,
  state:String
});
const contactModel=mongoose.model("contacts",contactSchema);
module.exports = contactModel;
