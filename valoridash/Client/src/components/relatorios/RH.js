import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function RH() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="backButtonContainer">
                <button class="backButton" onClick={() => { navigate('/relatorios') }}>Voltar</button>
            </div>
        </div>
    )
}

export default RH;