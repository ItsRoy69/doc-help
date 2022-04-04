const mongoose = require("mongoose");

const Beds = new mongoose.Schema(
  {
    Hospital_Name: {
      required: false,
      type: String,
      max: 32,
    },
    Phone_no: {
      required: false,
      type: Number,
      unique: true,
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
    ICU_Beds: {
      required: false,
      type: Number,
    },
    Oxygen_Beds: {
      required: false,
      type: Number,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Beds", Beds);

module.exports = model;
