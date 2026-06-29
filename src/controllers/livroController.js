const { pool } = require('../config/db');

const criarLivro = async (req, res) => {
    try {
        const { titulo, isbn, preco, quantidade_estoque, autor_id, categoria_id } = req.body;

        if (!titulo || !isbn || preco === undefined || quantidade_estoque === undefined || !autor_id || !categoria_id) {
            return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
        }

        if (preco <= 0) {
            return res.status(400).json({ erro: 'O preço deve ser maior que zero.' });
        }

        if (quantidade_estoque < 0) {
            return res.status(400).json({ erro: 'A quantidade em estoque não pode ser negativa.' });
        }

        const query = `
            INSERT INTO livros (titulo, isbn, preco, quantidade_estoque, autor_id, categoria_id)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
        `;
        const valores = [titulo, isbn, preco, quantidade_estoque, autor_id, categoria_id];
        
        const novoLivro = await pool.query(query, valores);
        res.status(201).json({ mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro.rows[0] });

    } catch (error) {

        if (error.code === '23505') {
            return res.status(400).json({ erro: 'ISBN já cadastrado.' });
        }
        console.error(error);
        res.status(500).json({ erro: 'Não foi possível concluir a operação.' });
    }
};

const listarLivros = async (req, res) => {
    try {
        const { pesquisa, autor_id, categoria_id } = req.query;
        
        // Trazendo os nomes do autor e categoria usando JOIN, retornando apenas os ativos (RN08)
        let query = `
            SELECT l.id, l.titulo, l.isbn, l.preco, l.quantidade_estoque, 
                   a.nome AS autor, c.nome AS categoria
            FROM livros l
            JOIN autores a ON l.autor_id = a.id
            JOIN categorias c ON l.categoria_id = c.id
            WHERE l.ativo = true
        `;
        
        const valores = [];
        let contador = 1;

        if (pesquisa) {
            query += ` AND (l.titulo ILIKE $${contador} OR l.isbn ILIKE $${contador})`;
            valores.push(`%${pesquisa}%`);
            contador++;
        }
        if (autor_id) {
            query += ` AND l.autor_id = $${contador}`;
            valores.push(autor_id);
            contador++;
        }
        if (categoria_id) {
            query += ` AND l.categoria_id = $${contador}`;
            valores.push(categoria_id);
            contador++;
        }

        query += ' ORDER BY l.id DESC';

        const livros = await pool.query(query, valores);
        res.status(200).json(livros.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar livros.' });
    }
};

const atualizarLivro = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, isbn, preco, quantidade_estoque, autor_id, categoria_id } = req.body;

        if (preco <= 0) return res.status(400).json({ erro: 'O preço deve ser maior que zero.' });
        if (quantidade_estoque < 0) return res.status(400).json({ erro: 'Estoque não pode ser negativo.' });

        const query = `
            UPDATE livros 
            SET titulo = $1, isbn = $2, preco = $3, quantidade_estoque = $4, 
                autor_id = $5, categoria_id = $6, atualizado_em = CURRENT_TIMESTAMP
            WHERE id = $7 AND ativo = true
            RETURNING *
        `;
        const valores = [titulo, isbn, preco, quantidade_estoque, autor_id, categoria_id, id];

        const livroAtualizado = await pool.query(query, valores);
        
        if (livroAtualizado.rowCount === 0) {
            return res.status(404).json({ erro: 'Livro não encontrado ou inativado.' });
        }

        res.status(200).json({ mensagem: 'Livro atualizado com sucesso!', livro: livroAtualizado.rows[0] });
    } catch (error) {
        if (error.code === '23505') return res.status(400).json({ erro: 'ISBN já cadastrado.' });
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar livro.' });
    }
};

const inativarLivro = async (req, res) => {
    try {
        const { id } = req.params;
        
        const query = 'UPDATE livros SET ativo = false WHERE id = $1 RETURNING *';
        const livroInativado = await pool.query(query, [id]);

        if (livroInativado.rowCount === 0) {
            return res.status(404).json({ erro: 'Livro não encontrado.' });
        }

        res.status(200).json({ mensagem: 'Livro removido com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao inativar livro.' });
    }
};

module.exports = { criarLivro, listarLivros, atualizarLivro, inativarLivro };