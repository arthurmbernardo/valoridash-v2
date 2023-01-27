import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import PrivateRoute from './PrivateRoute';


function MyRouter() {    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PrivateRoute><Home /></PrivateRoute>
                } />
                <Route path='/register' element={
                    <PrivateRoute><Register /></PrivateRoute>
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;