import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Geral() {
    const navigate = useNavigate();
    console.log(process.env);

    return (
        <div>
            <Header />
            <div className="backButtonContainer">
                <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
                <br />
                <h1>Buscador de Indicações</h1>
                <div id="visibleIframeContainer">
                    <iframe title="Buscador de indicações" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_BUSCADOR_INDICACOES} frameborder="0" allowFullScreen="true"></iframe>
                </div>
                <br />
                <h1>Volumetria Geral</h1>
                <div id="visibleIframeContainer">
                    <iframe title="Volumetria Macro_V3_parcial" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_VOLUMETRIA_MACRO} frameborder="0" allowFullScreen="true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Geral;