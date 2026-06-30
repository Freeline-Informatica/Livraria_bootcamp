const { pool } = require('../config/db');

const criarAutor = async (req, res) => {
    try {
        const { nome } = req.body;
        
        if (!nome) {
            return res.status(400).json({ erro: 'O nome do autor é obrigatório.' });
        }

        const novoAutor = await pool.query(
            'INSERT INTO autores (nome) VALUES ($1) RETURNING *',
            [nome]
        );

        res.status(201).json({ 
            mensagem: 'Autor cadastrado com sucesso!', 
            autor: novoAutor.rows[0] 
        });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ erro: 'Autor já existe.' });
        }
        console.error(error);
        res.status(500).json({ erro: 'Erro interno ao cadastrar o autor.' });
    }
};

const listarAutores = async (req, res) => {
    try {
        const autores = await pool.query('SELECT * FROM autores ORDER BY nome ASC');
        res.status(200).json(autores.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar autores.' });
    }
};

const excluirAutor = async (req, res) => {
    const { id } = req.params;

    try {
        const autor = await pool.query(
            'SELECT * FROM autores WHERE id = $1',
            [id]
        );

        if (autor.rowCount === 0) {
            return res.status(404).json({ erro: 'Autor não encontrado.' });
        }

        const livros = await pool.query(
            'SELECT * FROM livros WHERE autor_id = $1',
            [id]
        );

        if (livros.rowCount > 0) {
            return res.status(400).json({
                erro: 'Não é possível excluir o autor, pois existem livros associados a ele.'
            });
        }

        await pool.query('DELETE FROM autores WHERE id = $1', [id]);

        return res.status(200).json({ mensagem: 'Autor excluído com sucesso.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro ao excluir autor.' });
    }
};


module.exports = { criarAutor, listarAutores, excluirAutor };