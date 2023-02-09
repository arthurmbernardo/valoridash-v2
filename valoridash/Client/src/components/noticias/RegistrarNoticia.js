import { useState } from "react";
import './Noticias.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegistarNoticia () {

    var msg = null;

    // Objeto usuário, com um estado e um setEstado
    const [post, setPost] = useState({
        title: "",
        descrip: "",
        dt_creation: "",
    });

    const preventSubmit = (e) => {
        e.preventDefault();
    };
    // Função que lida com os dados do input "...user" mantém o estado inicial "[e.target.name]:e.target.value" procura o atributo com o mesmo nome do input e troca o valor
    const handleInput = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    const handleSubmit = () => {
        // Envia uma requisição para a url com os dados do user
        Axios.post('http://localhost:3001/registrarnoticia', {
            title: post.title,
            descrip: post.descrip,
            dt_creation: post.dt_creation
        }).then((response) => {
            msg = response.data.msg;
            if (msg === 'postAlreadyRegistered') alert('Notícia já está registrada.');
            if (msg === 'newPostAdded') {
                alert('Novo post cadastrado.');
                navigate('/noticias');
            }
        })
    };

    return (
        <div className="post">
            <div className="container_post">
                <h2>Criar novo post:</h2>
                <form method='post' onSubmit={preventSubmit}>
                    <p>Nome:</p>
                    <input type="text" name="title" placeholder="Título" value={post.title} onChange={handleInput} required />
                    <p>Descrição:</p>
                    <textarea rows="15" cols="40" name="descrip" value={post.descrip} onChange={handleInput}>Escreva o post aqui</textarea>
                    <p>Data:</p>
                    <input type="date" name="dt_creation" placeholder="Data" value={post.dt_creation} onChange={handleInput} required />
                    <br /><br />
                    <button onClick={(e) => { navigate('/') }}>Voltar</button>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
                <div className="form_image" />
            </div>
        </div>
    )

}

export default RegistarNoticia;