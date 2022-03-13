const Ambulance = require("../models/Ambulance")

exports.createAmbulance = (req, res) => {

    const ambulance = new Ambulance(req.body)
    ambulance.save((err, data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}

exports.getAmbulance = (req,res) => {
    Ambulance.find((err , data) => {
        if (err) {
            return res.status(500).json({ err })
        }
        res.status(200).json({ data })
    })
}