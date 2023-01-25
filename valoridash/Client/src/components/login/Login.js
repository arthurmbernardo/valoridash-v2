import './Login.css';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // Função que lida com os dados do input "...user" mantém o estado inicial "[e.target.name]:e.target.value" procura o atributo com o mesmo nome do input e troca o valor
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const preventSubmit = (e) => {
        e.preventDefault();
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        // Envia uma requisição para a url com os dados do user
        Axios.post('http://localhost:3001/login', {
            email: user.email,
            password: user.password
        }).then((response) => {
            if (response.data.status) {
                const { token } = response.data;
                localStorage.setItem('token', token);
                console.log(response);
                navigate('/');
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
                    <br/><br />
                    <input type="submit" defaultValue="Entrar" onClick={handleSubmit} />
                </form>
                <div className="form_image"/>
            </div>
        </div>
    )
}

export default Login;