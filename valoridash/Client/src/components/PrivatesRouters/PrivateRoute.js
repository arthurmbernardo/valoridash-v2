import { Navigate } from "react-router-dom";
import { userToken } from "../../userData";
import setUserToken from "../../userData";

export const PrivateRoute = ( { children } ) => {

  const authenticator = localStorage.getItem('token');

  setUserToken();
    if (authenticator === userToken) {

      return children;
    }

    console.log(userToken);

    return <Navigate to="/login" />
  }

export default PrivateRoute;
