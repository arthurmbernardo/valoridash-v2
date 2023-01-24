import './Home.css'
import Header from '../header/Header';




function Home() {
    return (
        <div>
            <Header />
            <button>Sair</button>
            <div className='dashboard'>
                <div className="texto">
                    <h1>BEM VINDO AO VALORI DASH</h1>
                    <p>Aqui no Valori Dash você consegue visualizar
                        todos os relatórios que estão no Power Bi. Para isso,
                        basta clicar no  nome do relatório que deseja acessar!</p>
                    <p>
                        Lembrando sempre
                        que o acesso à esses relatórios é restrito apenas aos colaboradores da Valori.
                        <b>NUNCA</b> compartilhe sua senha com ninguém!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;