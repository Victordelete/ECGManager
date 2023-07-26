'use strict'

const express = require('express')
const router = express.Router() 

const controller = require('../controller/Paciente')

router.get('/listPaciente', controller.read)
router.post('/savePaciente', controller.insert)
router.post('/updatePaciente', controller.update)
router.post('/deletePaciente', controller.delete)

module.exports = router