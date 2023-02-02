import './Register.css';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

    var msg = null;

    // Objeto usuário, com um estado e um setEstado
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        department: "",
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
        Axios.post('http://192.168.45.187:3001/register', {
            email: user.email,
            password: user.password,
            name: user.name,
            department: user.department
        }).then((response) => {
            msg = response.data.msg;
            if (msg === 'invalidEmail') alert('E-mail inválido. Por favor insira um valor válido.');
            if (msg === 'invalidPassword') alert('Senha inválida. Por favor insira uma senha com pelo menos 8 caracteres.');
            if (msg === 'userAlreadyRegistered') alert('Usuário já está registrado.');
            if (msg === 'newUserAdded') {
                alert('Novo usuário cadastrado.');
                navigate('/');
            }
        })
    };

    return (
        <div className="register">
            <div className="container_register">
                <h2>Criar novo usuário</h2>
                <form method='post' onSubmit={preventSubmit}>
                    <p>Nome:</p>
                    <input type="text" name="name" placeholder="Nome" value={user.name} onChange={handleInput} required />
                    <p>E-mail:</p>
                    <input type="email" name="email" placeholder="E-mail" value={user.email} onChange={handleInput} required />
                    <p>Departamento:</p>
                    <select name="department" value={user.department} onChange={handleInput} >
                        <option value="atendimento">Atendimento</option>
                        <option value="comercial">Comercial</option>
                        <option value="estrategia_e_produtos">Estratégia e Produtos</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="marketing">Marketing</option>
                        <option value="operacional">Operacional</option>
                        <option value="rh">RH</option>
                    </select>
                    <p>Senha:</p>
                    <input type="password" name="password" placeholder="Senha" value={user.password} onChange={handleInput} required />
                    <br /><br />
                    <button onClick={(e) => { navigate('/') }}>Voltar</button>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
                <div className="form_image" />
            </div>
        </div>
    )
}

export default Register;