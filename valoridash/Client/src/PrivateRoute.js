import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const isAuthenticated = localStorage.getItem('token');

  console.log(isAuthenticated);
        
    if (isAuthenticated ) {
      return children
    }

    return <Navigate to="/login" />
  }

export default PrivateRoute;
