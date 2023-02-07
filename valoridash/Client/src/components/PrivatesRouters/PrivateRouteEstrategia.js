import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteEstrategia = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'estrategiaeprodutos') {
        return children;
    }

    return <Navigate to="/relatorios" />
}

export default PrivateRouteEstrategia;
