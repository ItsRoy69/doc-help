const Oxygen = require("../models/oxygen")

exports.createOxygen = (req, res) => {

    const oxygen = new Oxygen(req.body)
    oxygen.save((err, data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}

exports.getOxygen = (req,res) => {
    Oxygen.find((err , data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}