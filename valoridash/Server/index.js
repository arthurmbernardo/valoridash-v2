const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session')

// Conexão com o banco de dados
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "valoridashdb"
});

// Política de cors
app.use(cors());
// Usado para transformar a requisição para formato json.
// Sem isso, a requisição é enviada para o servidor mas não conseguimos tirar as informações dela
app.use(express.json());

// Método post para criar um novo usuário
app.post('/register', (req, res) => {
    // A requisição veio como json, então desestruturamos seu corpo para pegar os valores necessários
    const { email } = req.body;
    const { password } = req.body;
    const { name } = req.body;

    // comando sql para inserção de novos usuários na tabela
    let sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";

    // consulta sql com os dados da requisição
    db.query(sql, [email, password, name], (err, res) => {
        console.log(err);
    })
});


// Método post para logar um novo usuário
app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // comando sql para inserção de novos usuários na tabela
    let sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

    // consulta sql com os dados da requisição
    db.query(sql, [email, password], (err, res, fields) => {
        if(err) throw err;
        if(res.length > 0) {
            console.log("Você está logado!");
        } else {
            console.log("Não foi possível fazer o login!");      
        }
    })
})

app.get('/home', (req, res) => {
    if(authenticated = false) {
        
    }
})

app.listen(3001, () => {
    console.log("Rodando o server");
});