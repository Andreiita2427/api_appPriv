const express = require('express')
const router = express.Router()

const horario_medicoController = require('../controller/horario_medicoController')

router.get("/", horario_medicoController.getAll)
router.get("/:cedula_medico", horario_medicoController.getByCI)
router.post("/", horario_medicoController.create)
router.put("/:cedula_medico1", horario_medicoController.update)
router.delete("/:cedula_medico", horario_medicoController.deleteByCI)




module.exports = router