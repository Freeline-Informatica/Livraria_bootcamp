create table autores (
    id_autores serial primary key,
    nome_autores varchar(100) not null
);

create table categorias (
    id_cat serial primary key,
    nome_cat varchar(100) not null
);

create table livros (
    id_livros serial primary key,
    titulo varchar(100) not null,
    isbn varchar(20) unique, 
    preco decimal(10, 2),
    qnt_estque int,
    autor int,
    categoria int,
    dt_criacao timestamp default current_timestamp,
    dt_atualizacao timestamp default current_timestamp,
    constraint fk_autor foreign key (autor) references autores(id_autores) on delete cascade,
    constraint fk_cat foreign key (categoria) references categorias(id_cat) on delete cascade
);

insert into autores(nome_autores)
values
('Brandon Sanderson'),
('Sarah J. Mass'),
('Robin Hobb');

insert into categorias(nome_cat) 
values
('Fantasia'),
('Romance'),
('Terror');