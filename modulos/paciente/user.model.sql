/*
    Como neste projeto assumimos que os dados já existem estou criando um modelo para o banco de dados. 

    Ele será persistido em postgresql contendo dados. Cada comando foi realizado individualmente utilizando SQL Shel (psl). 
*/

CREATE DATABASE PACIENTES_API;

\c PACIENTES_API;

CREATE TABLE PACIENTE(
    PK_PACIENTE SERIAL PRIMARY KEY,
    NOME VARCHAR(100),
    DATA_NASCIMENTO VARCHAR(11), 
    CPF VARCHAR(11), 
    TELEFONE VARCHAR(11)
);
 