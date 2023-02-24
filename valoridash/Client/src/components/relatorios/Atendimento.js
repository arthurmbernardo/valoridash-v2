import Header from "../header/Header";
import './Relatorio.css';
import { useNavigate } from "react-router-dom";


function Atendimento() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="backButtonContainer">
            <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            </div>
            <br />
            <h1>PPV Atendimento</h1>
            <div id="visibleIframeContainer">
                <iframe title="PPV ATENDIMENTO" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_PPV_ATENDIMENTO} frameBorder='0' allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Atendimento;