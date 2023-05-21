const express = require('express')
const router = express.Router()

const medicController = require('../controller/medicController')

router.get("/", medicController.getAll)
router.get("/:cedMed", medicController.getByCI)
router.post("/", medicController.create)
router.put("/:cedMed1", medicController.update)
router.delete("/:cedMed", medicController.deleteByCI)




module.exports = router