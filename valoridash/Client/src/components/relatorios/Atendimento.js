import Header from "../header/Header";
import './Relatorio.css';
import { useNavigate } from "react-router-dom";


function Atendimento() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <button className="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            <div id="visibleIframeContainer">
                <iframe title="PPV ATENDIMENTO" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=1a85635c-b5ed-4196-ac46-800fa68d946b&autoAuth=true&ctid=0a42edab-afcd-48af-a0b9-5b78edb164da" frameBorder='0' allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Atendimento;