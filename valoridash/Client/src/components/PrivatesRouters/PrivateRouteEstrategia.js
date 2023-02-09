import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteEstrategia = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'estrategiaeprodutos') {
        return children;
    }

    alert('Você não tem permissão para acessar essa área!');
    return <Navigate to="/relatorios" />
}

export default PrivateRouteEstrategia;
