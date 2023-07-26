function listPaciente() {
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://localhost:3000/listPaciente')
    .then((response) => {
        // handle success
        console.log(response);
    })
    .catch((error) => {
        // handle error
        console.log(error);
    });

    return;
};

function savePaciente(){
    const axios = require('axios');

    axios.post('https://localhost:3000/savePaciente', {
        nome: document.getElementById(nome),
        data_nascimento: document.getElementById(data_nascimento), 
        cpf: document.getElementById(cpf), 
        telefone: document.getElementById(telefone)
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


    return;

}