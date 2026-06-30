const express = require('express');
const router = express.Router();
const LivroController = require('./livroController');

router.get('/livros', LivroController.listarLivros);
router.post('/livros', LivroController.cadastrarLivro);
router.put('/livros/:id', LivroController.editarLivro);
router.delete('/livros/:id', LivroController.removerLivro);

module.exports = router;