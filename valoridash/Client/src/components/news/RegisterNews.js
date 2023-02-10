import { useState } from "react";
import './News.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterNews () {

    var msg = null;

    // Objeto usuário, com um estado e um setEstado
    const [news, setNews] = useState({
        title: "",
        descrip: "",
        dt_creation: "",
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
        // Envia uma requisição para a url com os dados do user
        Axios.post('http://localhost:3001/register/news', {
            title: news.title,
            descrip: news.descrip,
            dt_creation: news.dt_creation
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
                    <p>Descrição:</p>
                    <textarea rows="15" cols="40" name="descrip" value={news.descrip} onChange={handleInput}>Escreva o news aqui</textarea>
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