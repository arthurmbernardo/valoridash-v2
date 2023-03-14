import './Login.css';
import { useState, React } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import setUserToken, { setUserDepartment } from '../../userData';
import clearStorage from '../../clearStorage';
import loginLogo from '../../images/loginLogo.png';
import user_icon from '../../images/user.png';
import lock_icon from '../../images/lock.png';

function Login() {

    window.addEventListener('load', clearStorage);

    var token = null;
    var msg = null;
    var department = null;
    var userName = null;

    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        email: "",
        password: "",
        department: "",
        userName: "",
        dt_nasc: ""
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
        <div id="loginMain">
            {/* Aqui valoridash */}
            <img src={loginLogo} id='login_logo' />
            <div id="loginFormContainer">
                <form method="post" onSubmit={preventSubmit} id="textbox" >

                    <div id='icon_container'>
                        <img src={user_icon} id='user_icon_img' />
                        <input type="email" name="email" placeholder="E-mail" value={user.email} onChange={handleInput} required />
                    </div>
                    <div id='icon_container'>
                        <img src={lock_icon} id='lock_icon_img' />
                        <input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleInput} required />
                    </div>
                    <br /><br />
                    <button onClick={handleSubmit}>Entrar</button>

                </form>
            </div>
            <div id='loginFooter'>
                <a>Cria uma conta</a>
                <br></br>
                <a>Política de privacidade</a>
            </div>
        </div>
    )
}
export default Login;