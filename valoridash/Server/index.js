const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "valoridashdb"
});

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    const { name } = req.body;

    let sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";

    db.query(sql, [email, password, name], (err, res) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("Rodando o server")
});