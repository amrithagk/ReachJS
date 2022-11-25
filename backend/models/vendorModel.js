const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    phno: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    products: { type: String, required: true },
    idproof: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model('vendordetails', vendorSchema);
module.exports = Vendor;