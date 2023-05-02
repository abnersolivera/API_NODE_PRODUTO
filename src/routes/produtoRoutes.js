const express = require('express');
const produtoController = require('../controllers/produtoController');

const router = express.Router();

router.get('/produtos', produtoController.listarProdutos);
router.post('/produtos', produtoController.adicionarProduto);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.excluirProduto);

module.exports = router;
