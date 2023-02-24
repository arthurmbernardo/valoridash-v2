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
            <h1>PPV Credenciamento</h1>
            <div id="visibleIframeContainer">
            <iframe title="PPV credenciamento_api" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=a73f913f-5796-4036-be66-d93eb1b69052&autoAuth=true&ctid=0a42edab-afcd-48af-a0b9-5b78edb164da" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Operacional;