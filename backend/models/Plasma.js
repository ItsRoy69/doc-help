const mongoose = require("mongoose");

const Plasma = new mongoose.Schema(
  {
    Name: {
      required: false,
      type: String,
      maxLength: 32,
    },
    Phone_no: {
      required: false,
      type: String,
    },
    Blood_group: {
      required: false,
      type: Number,
    },
    C_Date: {
      required: false,
      type: String,
    },
    Address: {
      required: false,
      type: String,
    },
    City: {
      required: false,
      type: String,
      max: 32,
    },
    Pincode: {
      required: false,
      type:Number,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Plasma", Plasma);

module.exports = model;
