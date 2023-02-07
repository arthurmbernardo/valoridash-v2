import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteComercial = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'comercial' || authenticator === 'estrategiaeprodutos') {
        return children;
    }

    return <Navigate to="/relatorios" />
}

export default PrivateRouteComercial;
