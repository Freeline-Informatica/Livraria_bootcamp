# Livraria Sabitiruc's

Este projeto foi desenvolvido como parte de um teste técnico com o objetivo de criar um sistema para gerenciamento do catálogo de uma livraria.

A aplicação permite cadastrar, listar, editar e remover livros utilizando uma API desenvolvida em Node.js com os dados armazenados em um banco PostgreSQL.

Como o tempo disponível para o desenvolvimento era de dois dias, procurei dividir o projeto em etapas, implementando primeiro toda a estrutura do banco de dados, depois a API e, por último, o front-end.

---

# Tecnologias utilizadas

## Back-end

- Node.js
- Express

## Front-end

- HTML5
- CSS3
- JavaScript

## Banco de dados

- PostgreSQL

## Ferramentas

- Docker
- Docker Compose
- pgAdmin
- Nodemon

---

# Como executar o projeto

## Clonar o repositório

```bash
git clone <url-do-repositorio>

cd <nome-do-projeto>
```

## Instalar as dependências

```bash
npm install
```

## Criar o arquivo `.env`

Na pasta do back-end crie um arquivo chamado `.env`.

```env
PORT=3000

DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=livraria_db
DB_NAME=livraria_sabitirucs
DB_PORT=5432
```

## Executar utilizando Docker

```bash
docker-compose up --build
```

---

# Endereços da aplicação

```
http://localhost:3000/

```

---

# Organização do desenvolvimento

Durante o desenvolvimento procurei implementar uma etapa por vez.

Primeiro modelei todo o banco de dados no PostgreSQL, criando as tabelas, os relacionamentos entre elas e definindo as chaves estrangeiras.

Depois configurei o Node.js, realizei a conexão com o banco utilizando um arquivo `.env` e comecei a desenvolver a API utilizando Express.

Com a comunicação entre a API e o banco funcionando corretamente, desenvolvi o front-end utilizando HTML, CSS e JavaScript para consumir as rotas da aplicação.

Essa forma de desenvolvimento facilitou bastante os testes, já que consegui validar cada parte do sistema antes de continuar para a próxima etapa.

---

# Banco de dados

O banco foi dividido em três tabelas principais:

- autores
- categorias
- livros

A tabela de livros possui relacionamento com autores e categorias através de chaves estrangeiras, evitando informações duplicadas e garantindo a integridade dos dados.

Também foram adicionados os campos de criação e atualização dos registros para facilitar o controle das informações armazenadas.

---

# Funcionalidades implementadas

O sistema permite:

- cadastrar livros;
- listar livros cadastrados;
- editar livros;
- remover livros;
- selecionar autores cadastrados;
- selecionar categorias cadastradas.

Todas as operações são realizadas diretamente no banco de dados PostgreSQL.

---

# Decisões durante o desenvolvimento

Uma das decisões foi desenvolver primeiro toda a estrutura do banco de dados antes de iniciar o back-end. Dessa forma consegui validar os relacionamentos e testar as consultas diretamente no PostgreSQL.

Depois da estrutura pronta, configurei a API e fui criando e testando cada rota individualmente.

Somente após validar toda a comunicação entre o Node.js e o banco comecei a desenvolver a interface.

Essa organização tornou mais simples identificar erros durante o desenvolvimento e evitou que problemas em uma camada acabassem dificultando os testes das outras.

---

# Dificuldades encontradas

A principal dificuldade foi a comunicação entre o front-end e o back-end.

Durante o desenvolvimento apareceram alguns problemas relacionados às rotas da API, envio dos dados e integração com o banco de dados.

Como procurei desenvolver cada parte separadamente, consegui testar as rotas individualmente até identificar a origem dos problemas e corrigir a comunicação entre todas as camadas da aplicação.

---

# Funcionalidades não implementadas

## Pesquisa por título e ISBN

Essa funcionalidade não foi implementada devido ao tempo disponível para o desenvolvimento.

Como o objetivo principal era entregar um CRUD completo e funcional, priorizei primeiro todas as operações obrigatórias.

## Filtros

Os filtros também ficaram para uma próxima versão pelo mesmo motivo.

## Autenticação

O sistema não possui autenticação.

Considerando o tempo disponível para o teste, optei por concentrar o desenvolvimento nas funcionalidades principais do gerenciamento dos livros.

---

# Melhorias futuras

Caso o projeto continue sendo desenvolvido, algumas melhorias podem ser implementadas:

- pesquisa por título;
- pesquisa por ISBN;
- filtros por categoria e autor;
- autenticação de usuários;
- paginação da listagem;
- validações mais completas;
- melhoria da interface;
- testes automatizados.

---

# Considerações finais

O desenvolvimento foi realizado procurando validar cada etapa antes de iniciar a próxima.

Essa abordagem ajudou a manter o projeto organizado e facilitou a identificação dos problemas encontrados durante o desenvolvimento.

Mesmo com o prazo reduzido, o objetivo foi entregar uma aplicação funcional, organizada e com todas as funcionalidades obrigatórias implementadas.