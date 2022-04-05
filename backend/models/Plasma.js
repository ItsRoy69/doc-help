const mongoose = require("mongoose");

const Plasma = new mongoose.Schema(
  {
    Name: {
      required: false,
      type: String,
      max: 32,
    },
    Phone_no: {
      required: false,
      type: Number,
    },
    City: {
      required: false,
      type: String,
      max: 32,
    },
    Address: {
      required: false,
      type: String,
    },
    Blood_group: {
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Plasma", Plasma);

module.exports = model;
