import './Login.css';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    var token = null;
    var msg = null;
    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // Função que lida com os dados do input "...user" mantém o estado inicial "[e.target.name]:e.target.value" procura o atributo com o mesmo nome do input e troca o valor
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const preventSubmit = (e) => {
        e.preventDefault();
    };

    const navigate = useNavigate();
    const handleSubmit = () => {
        // Envia uma requisição para a url com os dados do user
        Axios.post('http://192.168.45.187:3001/login', {
            email: user.email,
            password: user.password
        }).then((response) => {
            if (response.data.status === true) {
                token = response.data.token;
                localStorage.setItem('token', token);
                alert('Login realizado com sucesso!');
                navigate('/');
            } else if (response.data.status !== true) {
                msg = response.data.msg;
                if (msg === 'wrongPassword') alert('Senha incorreta. Verifique seus dados e tente novamente.');
                if (msg === 'wrongEmail') alert('Usuário não encontrado. Verifique seus dados e tente novamente.');
            }
        })
    };

    return (
        <div className="login">
            <div className="container_login">
                <h2>BEM VINDO AO VALORI DASH</h2>
                <form method="post" onSubmit={preventSubmit}>
                    <p>E-mail:</p>
                    <input type="email" name="email" placeholder="E-mail" value={user.email} onChange={handleInput} required />
                    <p>Senha:</p>
                    <input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleInput} required />
                    <br /><br />
                    <button onClick={handleSubmit}>Entrar</button>                    
                </form>
                <div className="form_image" />
            </div>
        </div>
    )
}

export default Login;