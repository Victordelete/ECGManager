'use strict'

const express = require('express')
const router = express.Router() 

const controller = require('../controller/Paciente')

router.get('/listPaciente', controller.read)
router.get('/getPaciente/:id', controller.getPaciente)
router.get('/getPacienteRead/:id', controller.getPacienteRead)

router.post('/savePaciente', controller.insert)
router.post('/updatePaciente', controller.update)
router.post('/deletePaciente', controller.delete)

module.exports = router