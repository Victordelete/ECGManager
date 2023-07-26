'use strict'

const model = require('../../../utils/modelLoader')

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
