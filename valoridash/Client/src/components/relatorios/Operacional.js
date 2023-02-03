import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Operacional() {

    const navigate = useNavigate();

    return(
        <div>
            <Header /> 
            <button onClick={ () => {navigate('/relatorios')} }>Voltar</button>           
        </div>
    )
}

export default Operacional;