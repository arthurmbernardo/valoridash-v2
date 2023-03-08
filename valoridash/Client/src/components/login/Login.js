import './Login.css';
import { useState, React } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  setUserToken, { setUserDepartment } from '../../userData';
import clearStorage from '../../clearStorage';

function Login() {

    window.addEventListener('load', clearStorage);

    var token = null;
    var msg = null;
    var department = null;
    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        email: "",
        password: "",
        department: "",
        userName: ""
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
        Axios.post(process.env.REACT_APP_CLIENT_LOGIN, {
            email: user.email,
            password: user.password
        }).then((response) => {
            if (response.data.status === true) {
                token = response.data.token;
                department = response.data.department;
                userName = response.data.userName;

                setUserToken(token, true);
                setUserDepartment(department);

                localStorage.setItem('token', token);
                localStorage.setItem('department', department);
                localStorage.setItem('userName', userName);

                alert('Login realizado com sucesso!');
                navigate('/');
            } else {
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