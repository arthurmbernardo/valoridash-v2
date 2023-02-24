import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Operacional() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="backButtonContainer">
                <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            </div>
            <br />
            <h1>PPV Credenciamento</h1>
            <div id="visibleIframeContainer">
                <iframe title="PPV credenciamento_api" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_PPV_CREDENCIAMENTO} frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Operacional;