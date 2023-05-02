const Produto = require('../models/produto');

//Vamos criar rotas para listar todos os produtos, adicionar um novo produto, 
//atualizar um produto existente e excluir um produto.
exports.listarProdutos = async (req, res) => {
    try {
      const produtos = await Produto.find();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao listar produtos.');
    }
  };
  
  exports.adicionarProduto = async (req, res) => {
    try {
      const produto = new Produto(req.body);
      await produto.save();
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao salvar produto.');
    }
  };
  
  exports.atualizarProduto = async (req, res) => {
    try {
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.body);
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao atualizar produto.');
    }
  };
  
  exports.excluirProduto = async (req, res) => {
    try {
      const produto = await Produto.findByIdAndDelete(req.params.id);
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao excluir produto.');
    }
  };