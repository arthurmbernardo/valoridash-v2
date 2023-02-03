import { Navigate } from "react-router-dom";

export const PrivateRoute = ( { children } ) => {



  const authenticator = localStorage.getItem('token');

    if (authenticator.length === 40) {
      return children;
    }

    return <Navigate to="/login" />
  }

export default PrivateRoute;
