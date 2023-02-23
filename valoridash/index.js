const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');

require("dotenv").config();

// Conexão com o banco de dados
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Política de cors
app.use(cors());
// Usado para transformar a requisição para formato json. Sem isso, a requisição é enviada para o servidor mas não conseguimos tirar as informações dela
app.use(express.json());

app.use(express.static(path.join(__dirname + '/Client/build')));

// Método post para criar um novo usuário
app.post('/register/user', (req, res) => {
    // A requisição veio como json, então desestruturamos seu corpo para pegar os valores necessários
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { department } = req.body;

    if (!name) {
        res.send({ msg: "nameInvalid" });
    } else {
        if (email.substring(email.length - 15, email.length) !== '@valoribank.com') {
            res.send({ msg: "invalidEmail" });
        } else {
            if (password.length < 8) {
                res.send({ msg: "invalidPassword" });
            } else {
                db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
                    if (err) {
                        res.send(err);
                    } else {
                        if (result.length > 0) {
                            res.send({ msg: "userAlreadyRegistered" });
                        } else {
                            bcrypt.hash(password, saltRounds, (errs, hash) => {
                                db.query(SQLInsert, [name, email, department, hash], (erro, results) => {
                                    if (erro) {
                                        res.send(erro);
                                    }
                                    res.send({ msg: 'newUserAdded' });
                                    console.log("Cadastro realizado com sucesso");
                                })
                            })
                            const SQLInsert = 'INSERT INTO users (name, email, department, password) VALUES (?, ?, ?, ?)';
                        }
                    }
                })
            }
        }
    }
});

// Método post para logar um novo usuário
app.post('/login', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;

    // Consulta sql com os dados da requisição
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (errs, results) => {
                if (results) {
                    res.send({
                        msg: "Usuário logado com sucesso", status: true, token: crypto.randomBytes(20).toString('hex'), department: result[0].department, name: result[0].name
                    });
                } else {
                    res.send({ msg: 'wrongPassword', status: false });
                }
            })
        } else {
            res.send({ msg: 'wrongEmail', status: false });
        }
    })
})

// Método post para resitrar novas notícias
app.post('/register/news', (req, res) => {
    // A requisição veio como json, então desestruturamos seu corpo para pegar os valores necessários
    const { title } = req.body;
    const { descrip } = req.body;
    const { dt_creation } = req.body;


    db.query('SELECT * FROM posts WHERE title = ?', [title], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            if (result.length > 0) {
                res.send({ msg: "newsAlreadyRegistered" });
            } else {
                db.query('INSERT INTO posts (title, descrip, dt_creation) VALUES (?, ?, ?)', [title, descrip, dt_creation], (erro, results) => {
                    if (erro) {
                        res.send(erro);
                    }
                    res.send({ msg: 'newNewsAdded' });
                    console.log("Cadastro realizado com sucesso");
                })
            }
        }
    })
});

// Método get para exibir as notícias 
app.get('/get/news', (req, res) => {
    db.query('SELECT * FROM posts', (err, result) => {
        if (err) console.log(err);
        else {
            res.send(result);
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Rodando o server na porta ${PORT}`);
});