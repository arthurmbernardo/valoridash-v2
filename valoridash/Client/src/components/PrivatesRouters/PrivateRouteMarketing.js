import { Navigate } from "react-router-dom";
import { setUserDepartment } from "../../userData";

export const PrivateRouteMarketing = ({ children }) => {

    const authenticator = localStorage.getItem('department');

    setUserDepartment();
    if (authenticator === 'marketing' || authenticator === 'estrategiaeprodutos') {
        return children;
    }

    return <Navigate to="/relatorios" />
}

export default PrivateRouteMarketing;
