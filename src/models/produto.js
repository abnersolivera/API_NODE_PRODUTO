const mongoose = require('mongoose');

//modelo de dados para representar os dados que serão armazenados no banco de dados. 
//Por exemplo, vamos criar um modelo Produto com propriedades como nome, preco, descricao, imagem e categoria.
const produtoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  descricao: String,
  imagem: String,
  categoria: String,
});

module.exports = mongoose.model('Produto', produtoSchema);
