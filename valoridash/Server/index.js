const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const crypto = require("crypto");

// Conexão com o banco de dados
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "valoridashdb"
});

// Política de cors
app.use(cors());
// Usado para transformar a requisição para formato json. Sem isso, a requisição é enviada para o servidor mas não conseguimos tirar as informações dela
app.use(express.json());

// Método post para criar um novo usuário
app.post('/register', (req, res) => {
    // A requisição veio como json, então desestruturamos seu corpo para pegar os valores necessários
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    const SQL = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(SQL, [email, password], (err, result, fields) => {
        if (err) {
            res.send(err);
        }
        if (result.length <= 0) {
            db.query("INSERT INTO users (email, password, name) VALUES (?, ?, ?)", [email, password, name], (err, result, fields) => {
                if(err) {
                    res.send(err);
                }
                res.send({ msg: "Novo usuário cadastrado"})

            })
        } else {
            res.send({ msg: "Usuário já cadastrado", status: false });
        }
    })
});

// Método post para logar um novo usuário
app.post('/login', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    // Comando sql para inserção de novos usuários na tabela
    const SQL = 'SELECT * FROM users WHERE email = ? AND password = ?';

    // Consulta sql com os dados da requisição
    db.query(SQL, [email, password], (err, result, fields) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            console.log("Você está logado!");
            res.send({ msg: "Usuário logado com sucesso", status: true, token: crypto.randomBytes(20).toString('hex') });
        } else {
            res.send({ msg: "Usuário não encontrado", status: false });
        }
    })
})


app.listen(3001, () => {
    console.log("Rodando o server");
});