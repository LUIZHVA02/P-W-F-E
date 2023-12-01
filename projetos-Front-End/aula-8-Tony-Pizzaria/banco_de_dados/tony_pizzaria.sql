create database tony_pizzaria;

use tony_pizzaria;

create table tonyPizzaria(
	idPizzaria int primary key not null,
    nome varchar(100),
    cnpj numeric(14),
    email varchar(100),
    telefone numeric(14)    
);

insert into tonyPizzaria (idPizzaria, nome, cnpj, email, telefone)values
(1,'Tony Pizzaria - Novo Hamburgo', 46854138485546, 'tonypizzaria@gmail.com', 55011915348532);

create table usuarios(
	idUsuario int primary key not null auto_increment,
    idPizzaria int,
    nome varchar(200),
    telefone numeric(14),
    cpf numeric(11),
    senha varchar(100),
    email varchar(100),
    
    foreign key (idPizzaria) references tonyPizzaria(idPizzaria)
);

create table endereco(
	idEndereco int primary key not null auto_increment,
    idUsuario int,
    cep numeric(9),
    cidade varchar(150)
);

