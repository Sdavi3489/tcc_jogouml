import express from 'express';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import pg from 'pg';
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