import Axios from "axios";
import { useEffect, useState } from "react";
import NewsModel from "./NewsModel";
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";

function News() {

    const navigate = useNavigate();

    const [listNews, setListNews] = useState('');

    useEffect(() => {
        Axios.get(process.env.REACT_APP_CLIENT_NEWS).then((response) => {
            setListNews(response.data);
        })
    }, [])

    return (
        <div>
            <Header />
            <button class="addButton" onClick={() => { navigate('/register/news') }}>Cadastar notícia</button>
            {Array.from(listNews).map((news, index) => {
                return <NewsModel
                    id={listNews[index].id}
                    title={listNews[index].title}
                    descrip={listNews[index].descrip}
                    dt_creation={listNews[index].dt_creation}
                    author={listNews[index].author}></NewsModel>
            })}
        </div>
    )
}

export default News;