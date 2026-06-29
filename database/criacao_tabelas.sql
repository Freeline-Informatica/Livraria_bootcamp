create table autores (
	id_autores int primary key,
	nome_autores varchar(100)
);

create table categorias (
	id_cat int primary key,
	nome_cat varchar(100)
);

create table livros (
	id_livros int primary key,
	titulo varchar(100),
	isbn int,
	preco decimal(10, 2),
	qnt_estque int,
	autor int,
	categoria int,
	dt_criacao timestamp default current_timestamp,
	dt_atualizacao timestamp default current_timestamp,
	constraint fk_autor foreign key (autor) references autores(id_autores) on delete cascade,
	constraint fk_cat foreign key (categoria) references categorias(id_cat) on delete cascade
	
);

