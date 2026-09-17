const express = require("express")
const router = express.Router();

const { create, read } = require("./controllers")

router.get("/bens",create)
router.get("/bens",read)

module.exports = router