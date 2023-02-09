import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteMarketing = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'marketing' || authenticator === 'estrategiaeprodutos') {
        return children;
    }

    alert('Você não tem permissão para acessar essa área!');
    return <Navigate to="/relatorios" />
}

export default PrivateRouteMarketing;
