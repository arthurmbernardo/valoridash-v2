import './Home.css'
// import Header from '../header/Header';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsModel from '../news/NewsModel';
import clearStorage from '../../clearStorage';

function Home() {

    window.addEventListener('load', clearStorage);

    const [listNews, setListNews] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/get/news').then((response) => {
            setListNews(response.data);
        })
    }, [])

    return (
        <div>
            {/* <Header /> */}
            <div className='dashboard'>
                <div className="texto">
                    <h1 id='homeTitle'>BEM VINDO AO VALORI DASH</h1>
                </div>
                <div className='homeContainer'>
                    <div className='newsContaienr'>
                        <h1 id='newsTitle'>Notícias</h1>
                        {Array.from(listNews).map((news, index) => {
                            return <NewsModel
                                id={listNews[index].id}
                                title={listNews[index].title}
                                descrip={listNews[index].descrip}
                                dt_creation={listNews[index].dt_creation}></NewsModel>
                        })}
                    </div>
                    <div className='iframeContainer'>
                        <h1 id='iframeContainerTitle'>Indicador Geral</h1>
                        <iframe title="PPV ATENDIMENTO" src="https://app.powerbi.com/reportEmbed?reportId=1a85635c-b5ed-4196-ac46-800fa68d946b&autoAuth=true&ctid=0a42edab-afcd-48af-a0b9-5b78edb164da" frameBorder='0' allowFullScreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;