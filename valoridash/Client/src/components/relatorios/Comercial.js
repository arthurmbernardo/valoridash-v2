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
            <h1>RGV Comercial</h1>
            <div id="visibleIframeContainer">
                <iframe title="RGV_Comercial_V4" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=e12b831e-3501-458e-999c-e22dfb0c3f07&autoAuth=true&ctid=0a42edab-afcd-48af-a0b9-5b78edb164da" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Comercial;