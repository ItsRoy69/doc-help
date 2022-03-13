const router = require("express").Router();
const { createOxygen, getOxygen } = require("../controllers/Oxygen");

router.post("/Oxygen" , createOxygen)
router.get("/Oxygen" , getOxygen)

module.exports = router