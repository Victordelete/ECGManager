# ECG Manager
<hr>
Projeto desenvolvido como forma de prova de conceito para um teste recebido. Trata-se de um sistema completo com capacidade de cadastro e acompanhamento em  tempo real dos sinais de eletrocardiograma dos pacientes cadastrados.

O desenvolvimento foi orientado em três direções separadas, com a integração necessária para o pleno funcionamento: 

* Banco Dados: utilizou-se instância postgresql para persistência dos dados dos pacientes. 
* FrontEnd: a interface do sistema web desenvolvido utilizando Angular e sua estrutura. 
* Backend: API desenvolvida com Node JSpara conexão com BD e a interface proposta.

Por se tratar de um projeto para teste de conceitos não possui testes automatizados, e seu desenvolvimento foi pensado somente para as validações na máquina própria. 

## Banco Dados

Como a quantidade de dados armazenados dos pacientes é bem simples, foi implementada um BD em PostgreSQL com somente uma tabela a principio, contendo: 

* Identificador. 
* Nome.
* CPF.
* Data Nascimento. 
* Telefone. 

Não foram desenvolvidos consultas mais complexas ao banco, ficando a cargo de melhorias futuras. O script SQL utilizado para criação é apresentado junto ao modelo de Paciente criado no Backend. 

## Backend

Como o servidor deste projeto, a principio, serve somente como um atravessador entre os dados do paciente foi desenvolvido um API com Node Js com funções de CRUD completas para o cadastro de pacientes.

Junto a Node JS foi utilizado Express para agilizar a criação da API, além de instância Sequelizer para facilitar os acessos e consultas ao Banco de Dados. Os dados de acesso ao BD são os utilizados na máquina de desenvolvimento. 

Foram implementadas as rotas: 

* **/listPaciente**. 
* **/getPaciente/:id**.
* **/getPaciente/:id**.
* **/getPacienteRead/:id**.
* **/savePaciente**.
* **/updatePaciente**.
* **/deletePaciente**.

A leitura de dados de ECG em tempo real apresentada em **getPacienteRead/id** é uma simulação de sinal real, que se repete a medida que as requisições são realizadas. Sinal é apresentado para todos os pacientes, na medida que é utilizado somente para teste. Para implementação real seria necessário desenvolvimento de conexão ao maquinário gerador dos sinais corretos.

Devido a ausência de testes automatizados todas as rotas implementas foram testadas utilizando testes funcionais com o **Postman**. Para iniciar o servidor pode ser utilizado: **node bin/www**. 

## Frontend

A interface desenvolvido em Angular com as conexões ao backend para cadastro e acompanhamento da lista de clientes, além da possibilidade de acompanhamento em tempo real dos sinais de um usuário. 

Utilizando navegador Google Chrome na versão vigente todas as funcionalidades estão em pleno funcionamento. 

A interfaça possui 4 telas: 

* **Home**: tela inicial sem grandes apresentações. 
* **Cadastro**: tela com formulário para cadastro de novos pacientes. 
* **Lista**: tela para apresentação de todos os pacientes, com conexão para a tela ECG com os dados simulados para o paciente cadastrado. 
* **ECG**: tela com apresentação dos dados simulados do paciente, além dos dados de cadastro do mesmo. 

A apresentação de interface é valida somente quando encaminhada a partir de paciente já cadastrado, clicando no icone válido, e os sinais são atualizados a cada segundo. Para iniciar o servidor pode ser utilizado: **ng serve**. 