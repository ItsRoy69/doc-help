const mongoose = require("mongoose")

const Oxygen = new mongoose.Schema(
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
        Alt_Phone: {
            required: true,
            type: Number,
        },
    },
    { timestamps: true }
)

const model = mongoose.model("Oxygen", Oxygen);

module.exports = model