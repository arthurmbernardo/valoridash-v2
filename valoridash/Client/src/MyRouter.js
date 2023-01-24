import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import PrivateRoute from './PrivateRoute';


function MyRouter() {

    // const checkUserToken = () => {
    //     const userToken = localStorage.getItem('user-token');
    //     if (!userToken || userToken === 'undefined') {
    //         setIsLoggedIn(false);
    //     } else {
    //         setIsLoggedIn(true);
    //     }
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute><Home /></PrivateRoute>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;