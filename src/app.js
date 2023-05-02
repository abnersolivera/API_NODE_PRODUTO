// //Importando as dependências necessárias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtoRoutes');

//banco de dados MongoDB usando o Mongoose com docker
mongoose.connect('mongodb://localhost/node-crud', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
mongoose.connection.once('open', () => console.log('Conectado ao MongoDB.'));

//Configurando o Express para usar o body-parser e lidar com as rotas do aplicativo. 
const app = express();

app.use(bodyParser.json());
app.use('/', produtoRoutes);
app.listen(3000, () => console.log('Servidor iniciado na porta 3000.'));