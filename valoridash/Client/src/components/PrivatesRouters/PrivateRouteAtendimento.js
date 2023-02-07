import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteAtendimento = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'atendimento' || authenticator === 'estrategiaeprodutos') {
        return children;
    }

    return <Navigate to="/relatorios" />
}

export default PrivateRouteAtendimento;
