const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota para obter todos os livros (GET)
router.get('/', async (req, res) => {
  const livros = await obterLivros();
  res.json(livros);
});

// Rota para incluir um novo livro (POST)
router.post('/', async (req, res) => {
  try {
    const novoLivro = req.body;
    await incluir(novoLivro);
    res.json({ mensagem: 'Livro incluído com sucesso!' });
  } catch (erro) {
    res.json({ mensagem: 'Falha ao incluir o livro.', erro });
  }
});

// Rota para excluir um livro pelo _id (DELETE)
router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    await excluir(_id);
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (erro) {
    res.json({ mensagem: 'Falha ao excluir o livro.', erro });
  }
});

module.exports = router;
