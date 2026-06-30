const db = require("../../config/db");

const LivroModel = {
    buscarTodos: async() => {
        const queryTexto = `\
            select
                l.id_livros,
                l.titulo,
                l.isbn,
                l.preco,
                l.qnt_estque,
                a.nome_autores as autor,
                c.nome_cat as categoria
            from livros l
            join autores a on l.autor = a.id_autores
            join categorias c on l.categoria = c.id_cat
        `;
        const resultado = await db.query(queryTexto);
        return resultado.rows;
    },

    criar: async(titulo, isbn, preco, qnt_estque, autor, categoria) => {
        const queryTexto = `
            insert into livros (titulo, isbn, preco, qnt_estque, autor, categoria)
            values ($1, $2, $3, $4, $5, $6)
            returning *
        `;
        const valores = [titulo, isbn, preco, qnt_estque, autor, categoria];
        const resultado = await db.query(queryTexto, valores);
        return resultado.rows[0];
    },

    atualizar: async(id_livros, titulo, isbn, preco, qnt_estque, autor, categoria) => {
        const queryTexto = `
            update livros
            set titulo = $1, isbn = $2, preco = $3, qnt_estque = $4, autor = $5, categoria = $6, dt_atualizacao = CURRENT_TIMESTAMP
            where id_livros = $7
            returning *
        `;
        const valores = [titulo, isbn, preco, qnt_estque, autor, categoria, id_livros];
        const resultado = await db.query(queryTexto, valores);
        return resultado.rows[0];
    },

    deletar: async(id_livros) => {
        const queryTexto = `
            delete from livros
            where id_livros = $1
            returning *
        `;
        const resultado = await db.query(queryTexto, [id_livros]);
        return resultado.rows[0];
    }
}

module.exports = LivroModel;