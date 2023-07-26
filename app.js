'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const paciente = require('./modulos/paciente/paciente')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

paciente.init(app)

module.exports = app