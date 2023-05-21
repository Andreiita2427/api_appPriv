const express = require('express')
const router = express.Router()

const pacienteController = require('../controller/pacienteController')

router.get("/", pacienteController.getAll)
router.get("/:cedulaPaciente", pacienteController.getByCI)
router.post("/", pacienteController.create)
router.put("/:cedulaPaciente1", pacienteController.update)
router.delete("/:cedulaPaciente", pacienteController.deleteByCI)

module.exports = router