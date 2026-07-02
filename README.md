# Projeto de Treino — Livraria Sabitiruc's

Modelo para o desenvolvimento do Projeto de Treino da empresa **Freeline Informática**.

## Responsáveis

- [Felipe Augusto Kuhl](https://github.com/felipejare)
    
- [Laiz Detros](https://github.com/DentrosL)
    

## Links do projeto

- Documentação
    
- Backend
    
- Frontend
    

---

# Desenvolvimento

O participante terá o prazo de **dois dias** para desenvolver e entregar uma aplicação web funcional.

O objetivo do teste não é construir um sistema completo de gestão para uma livraria, mas avaliar conhecimentos técnicos e práticos relacionados a:

- Interpretação de requisitos;
    
- Desenvolvimento front-end;
    
- Desenvolvimento back-end;
    
- Modelagem de banco de dados;
    
- Integração entre front-end e API;
    
- Organização do código;
    
- Qualidade visual;
    
- Resolução de problemas;
    
- Utilização do Git;
    
- Cumprimento do prazo.
    

O participante deverá priorizar o funcionamento correto do escopo obrigatório antes de desenvolver funcionalidades adicionais.

---

# Consulta de Livros — C&L

## Gerenciamento básico de livros

O **Projeto de Treino — Livraria Sabitiruc's** consiste no desenvolvimento de um sistema web para gerenciamento básico do catálogo de uma livraria.

O sistema deverá permitir o cadastro, consulta, edição e remoção ou inativação de livros.

Cada livro deverá estar relacionado a um autor e a uma categoria.

---

# Situação-problema

## Introdução

A Livraria Sabitiruc's possui um catálogo de livros de diferentes autores e categorias.

Atualmente, as informações dos livros são controladas manualmente por meio de anotações e planilhas.

## Situação-problema

O controle manual dificulta a localização e a atualização das informações dos livros.

Esse processo pode causar problemas como:

- Cadastros duplicados;
    
- Informações desatualizadas;
    
- Dificuldade para localizar livros;
    
- Falta de controle sobre a quantidade disponível;
    
- Erros na alteração de preços e estoque.
    

## Conclusão

Para melhorar a organização do catálogo, será desenvolvido um sistema web que centralize as informações dos livros.

O sistema deverá permitir que os usuários cadastrem, consultem, editem e removam ou inativem livros de maneira simples e organizada.

---

# Descrição da proposta

## Objetivo do software

O software deverá permitir o gerenciamento básico dos livros cadastrados na livraria.

Por meio do sistema, deverá ser possível:

- Cadastrar livros;
    
- Consultar livros;
    
- Editar livros;
    
- Remover ou inativar livros;
    
- Pesquisar livros;
    
- Filtrar livros por autor ou categoria;
    
- Consultar a quantidade disponível em estoque.
    

## Usuários do sistema

Para esta versão do projeto, não será obrigatório implementar autenticação ou diferentes níveis de acesso.

O sistema poderá considerar que todas as funcionalidades são utilizadas por um funcionário autorizado da livraria.

A implementação de autenticação será considerada um diferencial.

---

# Escopo obrigatório

O sistema deverá possuir:

- Cadastro de livros;
    
- Listagem de livros;
    
- Edição de livros;
    
- Remoção ou inativação de livros;
    
- Cadastro ou disponibilização de autores;
    
- Cadastro ou disponibilização de categorias;
    
- Pesquisa de livros;
    
- Filtro por autor ou categoria;
    
- Controle da quantidade em estoque;
    
- Validação dos dados;
    
- Integração entre front-end e back-end;
    
- Persistência dos dados no PostgreSQL;
    
- Execução do ambiente utilizando Docker.
    

---

# Regras de negócio

- **RN01 — ISBN único:** Não poderá existir mais de um livro cadastrado com o mesmo ISBN.
    
- **RN02 — Campos obrigatórios:** Todo livro deverá possuir título, ISBN, autor, categoria, preço e quantidade em estoque.
    
- **RN03 — Preço válido:** O preço do livro deverá ser maior que zero.
    
- **RN04 — Estoque válido:** A quantidade em estoque não poderá ser negativa.
    
- **RN05 — Autor obrigatório:** Todo livro deverá estar relacionado a um autor.
    
- **RN06 — Categoria obrigatória:** Todo livro deverá estar relacionado a uma categoria.
    
- **RN07 — Alteração de dados:** O sistema deverá permitir alterar as informações de um livro já cadastrado.
    
- **RN08 — Remoção de livro:** O participante poderá implementar exclusão permanente ou inativação lógica, desde que a decisão seja documentada.
    

---

# Requisitos funcionais

## Entradas

### RF01 — Cadastro de livro

O sistema deve permitir o cadastro de livros.

- **Dados necessários:** Título, ISBN, autor, categoria, preço e quantidade em estoque;
    
- **Usuário:** Funcionário da livraria.
    

### RF02 — Cadastro de autor

O sistema deve permitir o cadastro de autores ou disponibilizar autores previamente cadastrados.

- **Dados necessários:** Nome do autor;
    
- **Usuário:** Funcionário da livraria.
    

### RF03 — Cadastro de categoria

O sistema deve permitir o cadastro de categorias ou disponibilizar categorias previamente cadastradas.

- **Dados necessários:** Nome da categoria;
    
- **Usuário:** Funcionário da livraria.
    

## Processamentos

### RF04 — Edição de livro

O sistema deve permitir a edição das informações de um livro cadastrado.

- **Dados necessários:** Identificação do livro e dados atualizados;
    
- **Usuário:** Funcionário da livraria.
    

### RF05 — Remoção ou inativação de livro

O sistema deve permitir remover ou inativar um livro cadastrado.

- **Dados necessários:** Identificação do livro;
    
- **Usuário:** Funcionário da livraria.
    

### RF06 — Validação dos dados

O sistema deve validar os dados informados antes de concluir um cadastro ou uma edição.

O sistema não deverá aceitar:

- ISBN duplicado;
    
- Campos obrigatórios vazios;
    
- Preço igual ou menor que zero;
    
- Quantidade em estoque negativa.
    

### RF07 — Pesquisa e filtros

O sistema deve permitir pesquisar livros por título ou ISBN.

O sistema também deve permitir filtrar os livros por autor ou categoria.

## Saídas

### RF08 — Listagem de livros

O sistema deve apresentar uma listagem dos livros cadastrados.

A listagem deverá apresentar, no mínimo:

- Título;
    
- ISBN;
    
- Autor;
    
- Categoria;
    
- Preço;
    
- Quantidade em estoque;
    
- Ações de editar e remover ou inativar.
    

### RF09 — Visualização dos dados do livro

O sistema deve permitir visualizar as informações de um livro cadastrado.

- **Dados apresentados:** Título, ISBN, autor, categoria, preço e quantidade em estoque;
    
- **Usuário:** Funcionário da livraria.
    

### RF10 — Mensagens de retorno

O sistema deve apresentar mensagens de sucesso ou erro após as operações realizadas.

Exemplos:

- Livro cadastrado com sucesso;
    
- Livro atualizado com sucesso;
    
- Livro removido com sucesso;
    
- ISBN já cadastrado;
    
- Não foi possível concluir a operação.
    

---

# Requisitos não funcionais

- **RNF01 — Front-end:** A interface deverá ser desenvolvida utilizando Vue 3 e JavaScript.
    
- **RNF02 — Back-end:** A API deverá ser desenvolvida utilizando Node.js.
    
- **RNF03 — Banco de dados:** Os dados deverão ser armazenados em PostgreSQL.
    
- **RNF04 — Containerização:** O ambiente deverá ser configurado utilizando Docker e Docker Compose.
    
- **RNF05 — Comunicação:** O front-end deverá consumir os dados disponibilizados pela API.
    
- **RNF06 — Responsividade:** A interface deverá ser utilizável em computadores e dispositivos com telas menores.
    
- **RNF07 — Validação:** Os dados deverão ser validados no back-end. Validações adicionais no front-end serão consideradas positivamente.
    
- **RNF08 — Tratamento de erros:** A aplicação deverá apresentar mensagens compreensíveis quando uma operação não puder ser concluída.
    
- **RNF09 — Organização:** O código deverá possuir uma estrutura organizada e nomes compreensíveis.
    
- **RNF10 — Documentação:** O projeto deverá possuir instruções para instalação e execução.
    

---

# Tecnologias obrigatórias

O projeto deverá utilizar:

- **Front-end:** Vue 3;
    
- **Linguagem:** JavaScript;
    
- **Back-end:** Node.js;
    
- **Banco de dados:** PostgreSQL;
    
- **Infraestrutura:** Docker e Docker Compose;
    
- **Controle de versão:** Git.
    

Bibliotecas e frameworks adicionais poderão ser escolhidos livremente.

Exemplos:

- Axios;
    
- Pinia;
    
- Vue Router;
    
- Tailwind CSS;
    
- Bibliotecas de componentes.
    

---

# Modelo mínimo do banco de dados

O banco de dados deverá possuir, no mínimo, as seguintes entidades:

## Livros

Campos sugeridos:

- Identificador;
    
- Título;
    
- ISBN;
    
- Preço;
    
- Quantidade em estoque;
    
- Autor;
    
- Categoria;
    
- Data de criação;
    
- Data de atualização.
    

## Autores

Campos sugeridos:

- Identificador;
    
- Nome.
    

## Categorias

Campos sugeridos:

- Identificador;
    
- Nome.
    

O participante poderá adicionar outros campos ou entidades, desde que sejam relevantes para a solução.

---

# Funcionalidades adicionais

As funcionalidades abaixo não são obrigatórias e deverão ser desenvolvidas somente após a conclusão do escopo principal:

- Autenticação;
    
- Controle de usuários;
    
- Cadastro de clientes;
    
- Registro de vendas;
    
- Baixa automática de estoque;
    
- Dashboard;
    
- Paginação;
    
- Ordenação da listagem;
    
- Tema claro e escuro;
    
- Testes automatizados;
    
- Documentação da API;
    
- Histórico de movimentações;
    
- Deploy da aplicação.
    

A ausência dessas funcionalidades não deverá prejudicar a avaliação do escopo obrigatório.

---

# Entregas esperadas

Ao final do prazo, deverão ser entregues:

- Repositório do front-end;
    
- Repositório do back-end ou repositório único;
    
- Arquivos de configuração do Docker;
    
- Estrutura do banco de dados;
    
- Código-fonte da aplicação;
    
- Arquivo `README.md`;
    
- Instruções para instalação e execução;
    
- Histórico de commits.
    

O `README.md` deverá explicar, no mínimo:

1. Como clonar o projeto;
    
2. Como configurar as variáveis de ambiente;
    
3. Como iniciar os contêineres;
    
4. Como criar ou atualizar o banco de dados;
    
5. Como acessar a aplicação;
    
6. Quais decisões técnicas foram tomadas;
    
7. Quais funcionalidades foram concluídas;
    
8. Quais funcionalidades não foram concluídas.
    

---

# Critérios de aceitação

O projeto será considerado funcional quando for possível:

1. Iniciar o ambiente seguindo as instruções do `README.md`;
    
2. Cadastrar um livro;
    
3. Visualizar o livro na listagem;
    
4. Editar as informações do livro;
    
5. Pesquisar o livro pelo título ou ISBN;
    
6. Filtrar os livros por autor ou categoria;
    
7. Remover ou inativar o livro;
    
8. Reiniciar a aplicação sem perder os dados cadastrados;
    
9. Receber mensagens compreensíveis em operações de sucesso ou erro.
    

---

# Critérios de avaliação

O participante será avaliado considerando:

- Atendimento ao escopo obrigatório;
    
- Funcionamento da aplicação;
    
- Organização do código;
    
- Modelagem do banco de dados;
    
- Integração entre front-end e back-end;
    
- Validação dos dados;
    
- Tratamento de erros;
    
- Qualidade visual;
    
- Experiência de uso;
    
- Responsividade;
    
- Utilização do Git;
    
- Qualidade dos commits;
    
- Configuração do Docker;
    
- Clareza da documentação;
    
- Capacidade de priorização;
    
- Cumprimento do prazo.
    

---

# Prazo

O prazo para desenvolvimento e entrega será de **dois dias**, contados a partir do recebimento do teste.

O participante deverá entregar o que foi concluído dentro do prazo, mesmo que alguma funcionalidade não tenha sido finalizada.

Funcionalidades incompletas deverão ser informadas no `README.md`.

Será melhor avaliada uma aplicação simples, funcional e bem organizada do que uma aplicação com muitas funcionalidades incompletas ou instáveis.

---

# Projeto de Treino — Livraria Sabitiruc's

## Documentação da solução

A documentação do projeto desenvolvido está disponível em:

- [Documentação da Solução](DOCUMENTACAO.md)