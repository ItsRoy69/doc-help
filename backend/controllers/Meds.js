const Meds = require("../models/Meds")

exports.createMeds = (req, res) => {

    const meds = new Meds(req.body)
    meds.save((err, data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}

exports.getMeds = (req,res) => {
    Meds.find((err , data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}