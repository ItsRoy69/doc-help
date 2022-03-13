const router = require("express").Router();
const { createMeds, getMeds } = require("../controllers/Meds");

router.post("/Meds" , createMeds)
router.get("/Meds" , getMeds)

module.exports = router