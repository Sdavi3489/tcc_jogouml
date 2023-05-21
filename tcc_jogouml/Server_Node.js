import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from 'pg';
//const axios = require('axios');
app.use(bodyParser.json());
app.use(cors());

const client = new pg.Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'bd_jogouml',
        password: 'sdavi1201',
        port: 5432,
    }
);

client.connect();

app.post('/perg', function (req, res) {
    client.query({
        text: 'INSERT INTO Pergunta (id_perg,pergunta,opcao_a,opcao_b,opcao_c,opcao_d,ver_a,ver_b,ver_c,ver_d,resposta_correta) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
        values: [req.body.id_perg, req.body.pergunta, req.body.opcao_a, req.body.opcao_b, req.body.opcao_c, req.body.opcao_d, req.body.ver_a, req.body.ver_b, req.body.ver_c, req.body.ver_d, req.body.resposta_correta]
    })
        .then(
            function (ret) {
                res.json(req.body)
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

// app.get('/verify/:resp', function (req, res) {
//     client.query({
//         text: 'SELECT * FROM Pergunta WHERE id_perg = $1',
//         values: [req.params.resp]
//     })
//         .then(
//             function (ret) {
//                 res.json(ret.rows)
//             }
//         )
// })



app.listen(3000,
    function () { console.log('Inicialização OK!'); }
);