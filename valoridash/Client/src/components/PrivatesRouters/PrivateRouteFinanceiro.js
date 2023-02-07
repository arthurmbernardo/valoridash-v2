import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteFinanceiro = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'financeiro' || authenticator === 'estrategiaeprodutos') {
        return children;
    }

    return <Navigate to="/relatorios" />
}

export default PrivateRouteFinanceiro;
