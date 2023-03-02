import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Estrategia() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="backButtonContainer">
                <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            </div>
            <br />
            <h1>Relatório de teste</h1>
            <div id="visibleIframeContainer">
                <iframe title="Teste" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_TESTE} frameBorder='0' allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Estrategia;