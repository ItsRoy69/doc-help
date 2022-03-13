const router = require("express").Router();
const { createAmbulance, getAmbulance } = require("../controllers/Ambulance");

router.post("/Ambulance" , createAmbulance)
router.get("/Ambulance" , getAmbulance)

module.exports = router