const LivroModel = require('./livroModel');

const LivroController = {
    listarLivros: async(req, res) => {
        try {
            const livros = await LivroModel.buscarTodos();
            res.json(livros);
        } catch(erro) {
            console.error(erro);
            res.status(500).json({erro: "Erro ao buscar os livros."});
        }
    },

    buscarPorId: async(req, res) => {
        try {
            const { id } = req.params;
            const livro = await LivroModel.buscarPorId(id); 

            if (!livro) {
                return res.status(404).json({ erro: "Livro não encontrado." });
            }

            res.json(livro);
        } catch(erro) {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar os detalhes do livro." });
        }
    },

    cadastrarLivro: async(req, res) => {
        const { titulo, isbn, preco, qnt_estque, autor, categoria } = req.body;

        if (!titulo || !isbn || !preco || !qnt_estque || !autor || !categoria) {
            return res.status(400).json({erro: "Todos os campos são obrigatorios."});
        }

        if (Number(preco) <= 0) {
            return res.status(400).json({erro: "O preço do livro deverá ser maior que zero."});
        }

        if(Number(qnt_estque) <= 0) {
            return res.status(400).json({erro: "A quantidade em estoque não poderá ser negativa"});
        }

        try {
            const novoLivro = await LivroModel.criar(titulo, isbn, preco, qnt_estque, autor, categoria);
            res.status(201).json({mesagem: "Livro cadastrado com sucesso!", livro: novoLivro});
        } catch(erro) {
            console.error(erro);
            if(erro.code == '23505') {
                return res.status(400).json({erro: "ISBN já cadastraado."});
            }
            res.status(500).json({erro: "Erro ao cadastrar o livro"});
        }
    },
    
    editarLivro: async (req, res) => {
        const { id } = req.params;
        const { titulo, isbn, preco, qnt_estque, autor, categoria } = req.body;

        if (!titulo || !isbn || !preco || !qnt_estque || !autor || !categoria) {
            return res.status(400).json({erro: "Todos os campos são obrigatórios."});
        }
        
        if (Number(preco) <= 0) {
            return res.status(400).json({erro: "O preço do livro deverá ser maior que zero."});
        }
        
        if (Number(qnt_estque) < 0) {
            return res.status(400).json({erro: "A quantidade em estoque não poderá ser negativa."});
        }

        try {
            const livroAtualizado = await LivroModel.atualizar(id, titulo, isbn, preco, qnt_estque, autor, categoria);
            
            if (!livroAtualizado) {
                return res.status(404).json({erro: "Livro não encontrado."});
            }

            res.json({mensagem: "Livro atualizado com sucesso!", livro: livroAtualizado});
        } catch (erro) {
            console.error(erro);
            if (erro.code === '23505') {
                return res.status(400).json({erro: "ISBN já cadastrado."});
            }
            res.status(500).json({erro: "Erro ao atualizar o livro."});
        }
    },

    removerLivro: async(req, res) => {
        const {id} = req.params;
        
        try {
            const livroDeletado = await LivroModel.deletar(id);

            if(!livroDeletado) {
                return res.status(400).json({erro: "Livro não encontrado."});
            }

            res.json({mensagem: "Livro removido com sucesso!"});
        } catch(erro) {
            console.error(erro);
            res.status(500).json({erro: "Não foi possível concluir a operação."});
        }
    }
}

module.exports = LivroController;