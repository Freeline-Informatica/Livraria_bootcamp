# 📚 Livraria Sabitiruc's - Backend

API REST desenvolvida em **Node.js** para o gerenciamento de livros, autores e categorias da Livraria Sabitiruc's.

## 🚀 Tecnologias

* Node.js
* Express
* PostgreSQL
* Docker
* Docker Compose

## ✨ Funcionalidades

* Cadastro, edição e remoção de livros
* Cadastro e gerenciamento de autores
* Cadastro e gerenciamento de categorias
* Pesquisa por título e ISBN
* Filtro por autor e categoria
* Validação dos dados
* Persistência em PostgreSQL

## 📋 Requisitos

* Docker e Docker Compose

ou

* Node.js 20+
* PostgreSQL

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=livraria
DB_USER=postgres
DB_PASSWORD=postgres
```

## ▶️ Executando com Docker

```bash
docker compose up --build
```

A API estará disponível em:

```
http://localhost:3000
```

## 💻 Executando localmente

```bash
npm install
npm run dev
```

## 📁 Estrutura

```text
src/
├── config/
├── controllers/
├── routes/
├── server.js
```

## 📚 Endpoints

### Livros

| Método | Endpoint    |
| ------ | ----------- |
| GET    | /livros     |
| GET    | /livros/:id |
| POST   | /livros     |
| PUT    | /livros/:id |
| DELETE | /livros/:id |

### Autores

| Método | Endpoint     |
| ------ | ------------ |
| GET    | /autores     |
| GET    | /autores/:id |
| POST   | /autores     |
| DELETE | /autores/:id |

### Categorias

| Método | Endpoint        |http://localhost:5173/livros
| ------ | --------------- |
| GET    | /categorias     |
| GET    | /categorias/:id |
| POST   | /categorias     |
| DELETE | /categorias/:id |http://localhost:5173/livros

## ✅ Regras de Negócio

* ISBN único
* Campos obrigatórios
* Preço maior que zero
* Estoque não negativo
* Todo livro deve possuir um autor
* Todo livro deve possuir uma categoria

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL para armazenar todas as informações da aplicação.

## 👨‍💻 Autor

**Renato Chagas de Moraes**
