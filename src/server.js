const express = require('express');
const cors = require('cors');
const { startDB } = require('./config/db');
const app = express();

app.use(cors());
app.use(express.json());

// Routes

app.use('/api/autores', require('./routes/autorRoutes'));
app.use('/api/categorias', require('./routes/categoriaRoutes'));
app.use('/api/livros', require('./routes/livroRoutes'));

// Test route

app.get('/', (req, res) => {
    res.json(
        { message: 'API da Livraria Sabitiruc\'s rodando!' }
    );
});

app.listen(3000, async () => {
    console.log('Servidor rodando na porta 3000');
    await startDB(); 
});