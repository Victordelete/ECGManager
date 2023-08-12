'use strict'

const model = require('../../../utils/modelLoader')
const pacienteRead = require('../model/pacienteRead');
const signalFunction = require('../model/signalFunction');


let indice = 0; 

exports.read = (req, res) => {

    model.Paciente.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.insert = (req, res) => {

    const dados = req.body

    model.Paciente
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
};


exports.update = (req, res) => {

    const dados = req.body;

    model.Paciente
        .update(dados, {
            where: {
                pk_paciente: req.query.pk_paciente
            }
        })
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        });
};

exports.delete = (req, res) => {

    const dados = req.body

    model.Paciente
        .destroy({
            where: {
                pk_paciente: dados.params.pk_paciente
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
};

exports.getPaciente = (req, res) => {
    const dados = req.body;

    model.Paciente.findOne({
        where: {
            pk_paciente: req.params.id
        }
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.getPacienteRead = (req, res) => {
    const signalVar = new signalFunction.SignalFunction();

    const pacienteData = new pacienteRead.PacienteRead( signalVar.signal[indice],
                                                        signalVar.signal[indice+1],
                                                        signalVar.signal[indice+2],
                                                        signalVar.signal[indice+3],
                                                        signalVar.signal[indice+4]);

    indice = indice+5;
    if(indice>=70){
        indice = 0;
    }

    const dados = req.body;

    model.Paciente.findOne(dados, {
        where: {
            pk_paciente: req.params.id
        }
    }).then((dados) => {

        res.send(pacienteData);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

