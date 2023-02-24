import './Home.css'
import Header from '../header/Header';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsModel from '../news/NewsModel';
import clearStorage from '../../clearStorage';
import { useNavigate } from 'react-router-dom';

function Home() {

    window.addEventListener('load', clearStorage);

    const navigate = useNavigate();

    const [listNews, setListNews] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/get/news').then((response) => {
            setListNews(response.data);
        })
    }, [])

    return (
        <div>
            <Header />
            <div className='dashboard'>
                <div className="texto">
                    <h1 id='homeTitle'>BEM VINDO AO VALORI DASH</h1>
                </div>
                <div className='homeContainer'>
                    <div className='newsContaienr'>
                        <h1 id='newsTitle'>Notícias</h1>
                        {Array.from(listNews).map((news, index) => {
                            if (index <= 6) {
                                console.log(index)
                                return <NewsModel
                                    id={listNews[index].id}
                                    title={listNews[index].title}
                                    descrip={listNews[index].descrip}
                                    dt_creation={listNews[index].dt_creation}></NewsModel>
                            }

                        })}
                        <button onClick={() => { navigate('/news') }}>Mais notícias</button>
                    </div>
                    <div className='iframeContainer'>
                        <h1 id='iframeContainerTitle'>Volumetria Macro</h1>
                        <iframe title="Volumetria Macro_V3_parcial" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_VOLUMETRIA_MACRO} frameborder="0" allowFullScreen="true"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;
