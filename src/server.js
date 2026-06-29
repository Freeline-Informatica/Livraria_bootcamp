const express = require('express');
const cors = require('cors');
const { startDB } = require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());
startDB();

// Routes

app.use('/api/autores', require('./routes/autorRoutes'));
app.use('/api/categorias', require('./routes/categoriaRoutes'));
app.use('/api/livros', require('./routes/livroRoutes'));

app.get('/', (req, res) => {
    res.json(
        { message: 'API da Livraria Sabitiruc\'s rodando!' }
    );
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});