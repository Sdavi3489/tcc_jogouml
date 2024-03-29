CREATE TABLE Usuario(
	id_user SERIAL PRIMARY KEY,
	username VARCHAR(255) NOT NULL UNIQUE,
	hash TEXT NOT NULL,
	pontuacao INTEGER DEFAULT 0
)

CREATE TABLE Pergunta(
	id_perg INT PRIMARY KEY,
	pergunta VARCHAR(2500),
	image VARCHAR(255),
	opcao_a VARCHAR(255),
	opcao_b VARCHAR(255),
	opcao_c VARCHAR(255),
	opcao_d VARCHAR(255),
	ver_a BOOLEAN,
	ver_b BOOLEAN,
	ver_c BOOLEAN,
	ver_d BOOLEAN,
	resposta_correta CHAR(1)
)

CREATE TABLE Resposta(
	id_resp INT PRIMARY KEY,
	resposta_dada CHAR(1),
	usuario_fk INT not null,
	pergunta_fk INT not null,
	FOREIGN KEY (usuario_fk) REFERENCES Usuario (id_user),
	FOREIGN KEY (pergunta_fk) REFERENCES Pergunta(id_perg)	
)

CREATE TABLE Conquista (
  	idConq SERIAL PRIMARY KEY,
  	conquista VARCHAR(100) NOT NULL,
	img VARCHAR(255),
  	descricao TEXT
);

-- Tabela para relacionar usuários e suas conquistas
CREATE TABLE Usuario_Conquista (
  id_usuario INT,
  id_conquista INT,
  PRIMARY KEY (id_usuario, id_conquista),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id_user),
  FOREIGN KEY (id_conquista) REFERENCES Conquista(idConq)
);


CREATE SEQUENCE IF NOT EXISTS usuario_id_user_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

INSERT INTO Usuario (username, hash) VALUES('Davi','654546546dsadasdas')
INSERT INTO Usuario (username, hash) VALUES('Davi','6das98d4as894984dsadds')
INSERT INTO Usuario VALUES(3,'Paulo')
INSERT INTO Pergunta VALUES(1,'O que é caso de uso?','É uma ação do usuário','Representa a ligação do usuário com o sistema','Serve como forma de relacionamento','É uma característica do ator',true,false,false,false,'A')
INSERT INTO Pergunta VALUES(2,'O que são os atores?','Representa apenas o sistema','Representa a ligação do usuário com o sistema', 'Serve como forma de relacionamento', 'São usuários que utilizam o sistema',false,false,false,true,'D')
INSERT INTO Resposta VALUES(1,'',,1,1)
INSERT INTO Resposta VALUES(2,'Representa apenas o sistema',150,1,2)


SELECT * FROM Usuario
SELECT * FROM Pergunta
SELECT * FROM Resposta
SELECT * FROM Conquista
SELECT * FROM Usuario_Conquista
SELECT id_conquista FROM Usuario,Usuario_Conquista WHERE id_user = id_usuario
SELECT * FROM Pergunta WHERE id_perg = 1

SELECT resposta_dada FROM Resposta Where resposta_dada

SELECT resposta_correta, resposta_dada FROM Pergunta, Resposta WHERE resposta_dada = resposta_correta
SELECT resposta_correta, resposta_dada FROM Pergunta, Resposta WHERE id_perg = id_resp
SELECT R.id_resp, R.resposta_dada
FROM Resposta R
WHERE
EXISTS(
	SELECT Pe.id_perg, Pe.resposta_correta
	FROM Pergunta Pe
	WHERE R.id_resp = Pe.id_perg
)

DELETE FROM Resposta WHERE id_resp = 1
DELETE FROM Resposta WHERE id_resp = 2

DELETE FROM Resposta;
DELETE FROM Usuario;


DELETE FROM Pergunta;
DELETE FROM Usuario_Conquista;

DROP TABLE Usuario CASCADE
DROP TABLE Resposta cascade
DROP TABLE Conquista cascade

UPDATE Usuario SET pontuacao = 0 WHERE id_user = 3
DROP TABLE Pergunta CASCADE


UPDATE Usuario
SET pontuacao = 7
WHERE id_user = 1

UPDATE Usuario
SET pontuacao = 20
WHERE id_user = 1 AND 20 > pontuacao;

SELECT pontuacao FROM Usuario WHERE id_user = 1

-- Adicionando as conquistas
INSERT INTO Conquista (conquista, descricao) VALUES ('Começando com o pé direiro!','Acerte a primeira pergunta')
INSERT INTO Conquista (conquista, descricao) VALUES ('Três seguidas','Acerte três perguntas seguidas')
INSERT INTO Conquista (conquista, descricao) VALUES ('Finalizando com chave de ouro!','Acerte a última pergunta')
INSERT INTO Conquista (conquista, descricao) VALUES ('Troféu Gabaritando Caso de Uso Iniciante','Gabarite o nível iniciante')



SELECT pontuacao FROM Usuario WHERE id_user=1

SELECT username, pontuacao FROM Usuario ORDER BY pontuacao DESC;