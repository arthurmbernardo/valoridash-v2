import './Home.css'
import Header from '../header/Header';

function Home() {
    return (
        <div>
            <Header />
            <div className='dashboard'>
                <div className="texto">
                    <h1>BEM VINDO AO VALORI DASH</h1>
                    <p>Aqui no Valori Dash você consegue visualizar
                        todos os relatórios que estão no Power Bi. Para isso,
                        basta clicar no  nome do relatório que deseja acessar!</p>
                    <p>
                        Lembrando sempre
                        que o acesso à esses relatórios é restrito apenas aos colaboradores da Valori.
                        <br/>
                        <b> NUNCA </b> compartilhe sua senha com ninguém!
                    </p>
                </div>
                <div className='biFrame'>
                <iframe id="Volumetria Macro_V2" title="Volumetria Macro_V2" width="1710" height="811.875" src="" frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home;