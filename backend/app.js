'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const paciente = require('./modulos/paciente/paciente')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

paciente.init(app)

module.exports = app