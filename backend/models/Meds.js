const mongoose = require("mongoose")

const Meds = new mongoose.Schema(
    {
        Name: {
            required: true,
            type: String,
        },
        Phone_no: {
            required: true,
            type: Number,
            unique: true
        },
        City: {
            required: true,
            type: String,
        },
        Address: {
            required: true,
            type: String,
        },
        Medicine: {
            required: true,
            type: String,
        },
    },
    { timestamps: true }
)

const model = mongoose.model("Meds", Meds);

module.exports = model