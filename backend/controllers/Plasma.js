const Plasma = require("../models/Plasma")

exports.createPlasma = (req, res) => {

    const plasma = new Plasma(req.body)
    plasma.save((err, data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}

exports.getPlasma = (req,res) => {
    Plasma.find((err , data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}