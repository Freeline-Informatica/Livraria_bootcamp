const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', categoriaController.criarCategoria);
router.get('/', categoriaController.listarCategorias);
router.delete('/:id', categoriaController.excluirCategoria);

module.exports = router;