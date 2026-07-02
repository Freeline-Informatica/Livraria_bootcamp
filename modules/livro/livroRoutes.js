const express = require('express');
const router = express.Router();
const LivroController = require('./livroController');

router.get('/', LivroController.listarLivros);
router.post('/', LivroController.cadastrarLivro);
router.put('/:id', LivroController.editarLivro);
router.put('/:id', LivroController.buscarPorId);
router.delete('/:id', LivroController.removerLivro);

module.exports = router;