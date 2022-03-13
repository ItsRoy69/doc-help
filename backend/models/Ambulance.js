const mongoose = require("mongoose")

const Ambulance = new mongoose.Schema(
    {
        Driver_Name: {
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
        Ambulance_no: {
            required: true,
            type: Number,
        },
    },
    { timestamps: true }
)

const model = mongoose.model("Ambulance", Ambulance);

module.exports = model