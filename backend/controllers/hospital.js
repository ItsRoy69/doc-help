const Hospital = require("../models/hospital")

exports.createHospital = (req, res) => {

    const hospital = new Hospital(req.body)
    hospital.save((err, data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}

exports.getHospital = (req,res) => {
    Hospital.find((err , data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}