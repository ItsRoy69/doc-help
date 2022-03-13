const router = require("express").Router();
const { createPlasma, getPlasma } = require("../controllers/Plasma");

router.post("/plasma" , createPlasma)
router.get("/plasma" , getPlasma)

module.exports = router