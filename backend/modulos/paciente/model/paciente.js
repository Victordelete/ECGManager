'use strict'

module.exports = (sequelize, DataTypes) => {

    const Pacientes = sequelize.define('Paciente', {
        pk_paciente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'pk_paciente'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },

        data_nascimento: {
            type: DataTypes.STRING,
            field: 'data_nascimento'
        },

        cpf: {
            type: DataTypes.STRING,
            field: 'cpf'
        },

        telefone: {
            type: DataTypes.STRING,
            field: 'telefone'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'paciente',
        timestamps: false
    })

    return Pacientes
}