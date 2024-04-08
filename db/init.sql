CREATE TABLE categorias{
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100)
}

CREATE TABLE produtos{
	id SERIAL PRIMARY KEY,
	nomeProduto VARCHAR(100),
	valorProduto BOOLEAN,
	dataVencimento DATE,
	quantEstoque INTEGER,
	produtoPerecivel BOOLEAN,
	categoria_id INTEGER,
	FOREIGN KEY (categorias) REFERENCES categorias(id)
}