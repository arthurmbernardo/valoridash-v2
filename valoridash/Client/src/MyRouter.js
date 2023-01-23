import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from './components/login/Login'
import Home from './components/home/Home'
import { useState } from 'react';


function MyRouter(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
   )
}

export default MyRouter;