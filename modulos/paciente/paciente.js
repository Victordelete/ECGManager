'use strict'

const modelLoader = require('../../utils/modelLoader')

const routerPaciente = require('./routes/paciente')

const models = [
    '../modulos/paciente/model/paciente'
]

exports.init = (app) => {

    app.use('/', routerPaciente)

}