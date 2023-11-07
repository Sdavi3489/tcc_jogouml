import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from 'pg';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import cookieParser from 'cookie-parser';
import axios from 'axios';
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//lembrar de utilizar de guardar a senha do banco de dados no arquivo .env para segurança, quando for fazer deploy
const client = new pg.Client(
    {
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    }
);
// const client = new pg.Client(
//     {
//         user: process.env.USER,
//         host: process.env.HOST,
//         database: process.env.DATABASE,
//         password: process.env.PASSWORD,
//         port: process.env.PORT,
//     }
// );

// console.log(process.env.VITE_REACT_APP_API_URL);

client.connect();

app.post('/perg', function (req, res) {
    client.query({
        text: 'INSERT INTO Pergunta (id_perg,pergunta,image,opcao_a,opcao_b,opcao_c,opcao_d,ver_a,ver_b,ver_c,ver_d,resposta_correta) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
        values: [req.body.id_perg, req.body.pergunta, req.body.image, req.body.opcao_a, req.body.opcao_b, req.body.opcao_c, req.body.opcao_d, req.body.ver_a, req.body.ver_b, req.body.ver_c, req.body.ver_d, req.body.resposta_correta]
    })
        .then(
            function (ret) {
                res.json(req.body) //esse post serve para inserir as perguntas novas
            }
        )
});

app.get('/question/:id', function (req, res) {
    client.query({
        text: 'SELECT * FROM Pergunta WHERE id_perg = $1',
        values: [req.params.id]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

app.post('/answer', function (req, res) {
    client.query({
        text: 'INSERT INTO Resposta (id_resp,resposta_dada,usuario_fk, pergunta_fk) VALUES($1,$2,$3,$4)',
        values: [req.body.id_resp, req.body.resposta_dada, req.body.usuario_fk, req.body.pergunta_fk]
    })
        .then(
            function (ret) {
                res.json(req.body)
            }
        )
})

// app.post('/answer', function (req, res) {
//     res.status(200).json(req.body); // os dados da resposta enviada através da requisição POST
// })

// Arrumar isso aqui
app.post('/conq', function (req, res) {
    client.query({
        text: 'INSERT INTO Usuario_Conquista (id_usuario,id_conquista) VALUES($1,$2)',
        values: [req.body.id_usuario, req.body.id_conquista]
    })
        .then(
            function (ret) {
                res.status(200).json(req.body);
                console.log(req.body)
            }
        )
})

app.get('/getConq', function (req, res) {
    client.query({
        text: 'SELECT id_conquista FROM Usuario,Usuario_Conquista WHERE id_user = id_usuario',
        //values: [req.body.resposta_correta, req.body.resposta_dada]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

app.delete('/Delresptemp', function (req, res) {
    client.query({
        text: 'DELETE FROM Resposta',
    })
        .then(
            function (ret) {
                res.send('Reinício das respostas')
            }
        )
})

app.get('/result', function (req, res) {
    client.query({
        text: 'SELECT resposta_correta, resposta_dada FROM Pergunta, Resposta WHERE id_perg = id_resp',
        //values: [req.body.resposta_correta, req.body.resposta_dada]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

//Consulta todos a pontuação de um usuário específico
app.get('/scoreUser/:id', function (req, res) {
    client.query({
        text: 'SELECT pontuacao FROM Usuario WHERE id_user=$1',
        values: [req.params.id]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

// Atualiza a pontuação do usuário
app.put('/rank/:id/:score', function (req, res) {
    client.query({
        text: 'UPDATE Usuario SET pontuacao = $2 WHERE id_user = $1 AND $2 > pontuacao',
        values: [req.params.id, req.params.score]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
                console.log("Score: ", ret.rows.score)
                console.log("Count: ", ret.rowCount)

            }
        )
})

// Consulta a pontuação de todos os usuários
app.get('/ranking', function (req, res) {
    client.query({
        text: 'SELECT username, pontuacao FROM Usuario ORDER BY pontuacao DESC',
        //values: [req.body.resposta_correta, req.body.resposta_dada]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

// TODO: FAZER UM NOVO ENDPOINT QUE CONSULTA A PONTUAÇÃO DE UM JOGADOR
app.get('/rank/:idUser', function (req, res) {
    client.query({
        text: 'SELECT pontuacao FROM Usuario WHERE id_user = $1',
        values: [req.params.idUser]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})


// Rota para fazer o login e gerar o token
app.post('/registro', (req, res) => {
    client.query({
        text: 'INSERT INTO Usuario (username,hash) VALUES($1,$2)',
        values: [req.body.username, req.body.hash]
    })
        .then(
            function (ret) {
                if (!req.body.username) {
                    return res.status(422).json({ msg: "O username é obrigatório!" })
                }
                if (!req.body.hash) {
                    return res.status(422).json({ msg: "A senha é obrigatória!" })
                }
                try {
                    // res.json(req.body);
                    res.status(200).json(req.body);
                }
                catch (error) {
                    console.error('Erro no Registro, tente com outro username e senha!');
                    res.status(401).json({ error: 'Erro no Registro, tente com outro username e senha!' });
                }
            }).catch((err)=>{
                console.error('Erro no Registro, tente com outro username e senha!', err);
                res.status(401).json({ error: 'Erro no Registro, tente com outro username e senha!' });

            });
});

const getUser = [];

app.post('/login', (req, res) => {
    // json dos dados do usuario
    const { id_user, username, hash } = req.body;

    if (!username) {
        return res.status(422).json({ msg: "O username é obrigatório!" })
    }
    if (!hash) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }
    try {
        getUser.unshift(req.body);
        res.status(200).json({ msg: 'Login bem-sucedido!' });
    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

const secretKey = process.env.SECRET_KEY;

app.use((req, res, next) => {
    const IDuser = getUser.map((e) => e.id_user)
    const id = IDuser[0];
    //console.log("id: ",id);
    const token = jwt.sign({ userId: id }, secretKey, { expiresIn: '1h' });
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
        res.cookie('token', token, { httpOnly: true, path: '/private', });
    }

    next();
});

app.get('/protegido', (req, res) => {
    //const token = req.cookies.token;
    const token = req.headers.authorization
    const IDLoginUser = getUser.map((e) => e.id_user)

    // Verificar se o token está presente
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido', valido: false });
    }

    // Verificar e validar o token
    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), secretKey);

        // Caso o token seja válido
        // retornar dados do usuário autenticado
        const userId = decoded.userId;
        //console.log("var global", IDLoginUser[0])
        //console.log("userId: ",userId)
        return res.status(200).json({ message: 'Rota protegida', userId: userId, valido: true, user: getUser[0] });

    } catch (error) {
        // O token é inválido ou expirou
        return res.status(401).json({ message: 'Token inválido', valido: false });
    }
});

app.get('/user/:username', function (req, res) {
    client.query({
        text: 'SELECT * FROM Usuario WHERE username = $1',
        values: [req.params.username]
    })
        .then(
            function (ret) {
                res.json(ret.rows)
            }
        )
})

const clearAuthCookie = (res) => {
    const cookieOptions = {
        expires: new Date(0), // Define a data de expiração para um momento no passado
        httpOnly: true, // Garante que o cookie só seja acessível via HTTP
        path: '/',
    };

    const emptyCookie = serialize('token', '', cookieOptions);
    res.setHeader('Set-Cookie', emptyCookie);
    //res.send('Cookie apagado!');
};

app.get('/logout', (req, res) => {
    try {
        clearAuthCookie(res);
        res.json({ logout: "Logout realizado com sucesso!", })
    } catch (error) {
        res.send("Aconteceu o seguinte erro: ", error)
    }
});


// Rota protegida que requer autenticação
app.get('/protectedCookie', (req, res) => {
    // Verificar se o cookie de autenticação está presente
    //const token = req.cookies.token;
    const token = req.cookies.token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido', valido: null })
    }

    try {
        return res.json({ token: token, valido: true })
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido', valido: false })
    }
    // if (token) {
    //     //res.send('Acesso autorizado!');
    //     return res.json({ token: token, valido: true })
    // } else {
    //     return res.status(401).json({ message: 'Token inválido', valido: false})
    // }
});


app.listen(process.env.PORT_SERVER,
    function () { console.log('Inicialização OK!'); }
);