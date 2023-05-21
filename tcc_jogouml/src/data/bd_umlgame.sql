CREATE TABLE Usuario(
	id_user INTEGER PRIMARY KEY,
	username VARCHAR(255),
	pontuacao INTEGER
)

CREATE TABLE Pergunta(
	id_perg INT PRIMARY KEY,
	pergunta VARCHAR(255),
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
	id_resp INTEGER PRIMARY KEY,
	resposta_dada CHAR(1),
	usuario_fk INT not null,
	pergunta_fk INT not null,
	FOREIGN KEY (usuario_fk) REFERENCES Usuario (id_user),
	FOREIGN KEY (pergunta_fk) REFERENCES Pergunta(id_perg)	
)

INSERT INTO Usuario VALUES(1,'Davi',900)
INSERT INTO Usuario VALUES(2,'João',800)
INSERT INTO Usuario VALUES(3,'Paulo')
INSERT INTO Pergunta VALUES(1,'O que é caso de uso?','É uma ação do usuário','Representa a ligação do usuário com o sistema','Serve como forma de relacionamento','É uma característica do ator',true,false,false,false,'A')
INSERT INTO Pergunta VALUES(2,'O que são os atores?','Representa apenas o sistema','Representa a ligação do usuário com o sistema', 'Serve como forma de relacionamento', 'São usuários que utilizam o sistema',false,false,false,true,'D')
INSERT INTO Resposta VALUES(1,'',,1,1)
INSERT INTO Resposta VALUES(2,'Representa apenas o sistema',150,1,2)


SELECT * FROM Usuario
SELECT * FROM Pergunta
SELECT * FROM Resposta
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

BEGIN;
DELETE FROM Resposta;
COMMIT;

DELETE FROM Resposta;


DELETE FROM Pergunta;

DROP TABLE Usuario CASCADE
DROP TABLE Resposta cascade
DROP TABLE Pergunta CASCADE