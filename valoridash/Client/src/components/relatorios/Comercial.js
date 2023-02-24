import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Comercial() {

    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className="backButtonContainer">
                <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            </div>
            <br />
            <h1>RGV Comercial</h1>
            <div id="visibleIframeContainer">
                <iframe title="RGV_Comercial_V4" width="1140" height="541.25" src={process.env.REACT_APP_RELATORIO_RGV_COMERCIAL} frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Comercial;