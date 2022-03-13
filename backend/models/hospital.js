const mongoose = require("mongoose")

const Beds = new mongoose.Schema(
    {
        Hospital_Name: {
            required: true,
            type: String,
            max: 32
        },
        Phone_no: {
            required: true,
            type: Number,
            unique: true
        },
        City: {
            required: true,
            type: String,
            max: 32
        },
        Address: {
            required: true,
            type: String,
        },
        ICU_Beds: {
            required: true,
            type: Number,
        },
        Oxygen_Beds: {
            required: true,
            type: Number,
        }

    },
    { timestamps: true }
)

const model = mongoose.model("Beds", Beds);

module.exports = model