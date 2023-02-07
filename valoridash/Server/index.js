const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
                        msg: "Usuário logado com sucesso", status: true, token: crypto.randomBytes(20).toString('hex'), department: result[0].department });
                } else {
                    res.send({ msg: 'wrongPassword', status: false });
                }
            })
        } else {
            res.send({ msg: 'wrongEmail', status: false });
        }
    })
})


app.listen(3001, () => {
    console.log("Rodando o server");
});