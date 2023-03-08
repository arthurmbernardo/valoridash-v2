import { useState } from "react";
import './News.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterNews () {

    var msg = null;

    // Objeto usuário, com um estado e um setEstado
    const [news, setNews] = useState({
        title: "",
        content: "",
        dt_creation: "",
        author: ""
    });

    const preventSubmit = (e) => {
        e.preventDefault();
    };
    // Função que lida com os dados do input "...user" mantém o estado inicial "[e.target.name]:e.target.value" procura o atributo com o mesmo nome do input e troca o valor
    const handleInput = (e) => {
        setNews({ ...news, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    const handleSubmit = () => {
        news.author = localStorage.getItem('name');
        
        // Envia uma requisição para a url com os dados do user
        Axios.post(process.env.REACT_APP_CLIENT_REGISTER_NEWS, {
            title: news.title,
            content: news.content,
            dt_creation: news.dt_creation,
            author: news.author
        }).then((response) => {
            msg = response.data.msg;
            if (msg === 'newsAlreadyRegistered') alert('Notícia já está registrada.');
            if (msg === 'newNewsAdded') {
                alert('Nova notícia cadastrada.');
                navigate('/news');
            }
        })
    };

    return (
        <div className="news">
            <div className="container_news">
                <h2>Criar novo news:</h2>
                <form method='news' onSubmit={preventSubmit}>
                    <p>Nome:</p>
                    <input type="text" name="title" placeholder="Título" value={news.title} onChange={handleInput} required />
                    <p>Conteúdo:</p>
                    <textarea required rows="15" cols="40" name="content" value={news.content} onChange={handleInput}>Escreva o news aqui</textarea>
                    <p>Data:</p>
                    <input type="date" name="dt_creation" placeholder="Data" value={news.dt_creation} onChange={handleInput} required />
                    <br /><br />
                    <button onClick={(e) => { navigate('/news') }}>Voltar</button>
                    <button onClick={handleSubmit}>Cadastrar</button>
                </form>
                <div className="form_image" />
            </div>
        </div>
    )

}

export default RegisterNews;