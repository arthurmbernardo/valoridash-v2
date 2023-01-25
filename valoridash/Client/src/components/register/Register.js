import './Register.css';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const preventSubmit = (e) => {
        e.preventDefault();
    }
    // Função que lida com os dados do input "...user" mantém o estado inicial "[e.target.name]:e.target.value" procura o atributo com o mesmo nome do input e troca o valor
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const navigate = useNavigate();
    const handleSubmit = () => {
        // Envia uma requisição para a url com os dados do user
        Axios.post('http://localhost:3001/register', {
            email: user.email,
            password: user.password,
            name: user.name
        }).then((response) => {
            console.log(response);
        })
    };

    return (
        <div className="login">
            <div className="container_login">
                <h2>Criar novo usuário</h2>
                <form method='post' onSubmit={preventSubmit}>
                    <p>Nome:</p>
                    <input type="text" name="name" placeholder="Nome" value={user.name} onChange={handleInput} required />
                    <p>E-mail:</p>
                    <input type="email" name="email" placeholder="E-mail" value={user.email} onChange={handleInput} required />
                    <p>Senha:</p>
                    <input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleInput} required />
                    <br /><br />
                    <input type="submit" defaultValue="Entrar" onClick={handleSubmit} />
                </form>
                <div className="form_image" />
            </div>
        </div>
    )
}

export default Register;