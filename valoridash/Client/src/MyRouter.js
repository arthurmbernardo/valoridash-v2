import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import PrivateRoute from './PrivateRoute';
import Atendimento from './components/relatorios/Atendimento';
import Comercial from './components/relatorios/Comercial';
import Estrategia from './components/relatorios/Estrategia';
import Financeiro from './components/relatorios/Financeiro';
import Marketing from './components/relatorios/Marketing';
import Operacional from './components/relatorios/Operacional';
import RH from './components/relatorios/RH';
import Relatorio from './components/relatorios/Relatorio';


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

                <Route path='/login' element={<Login />} />


                <Route path='/relatorios' element={<Relatorio />} />

                <Route path='/relatorios/atendimento' element={<Atendimento />} />
                <Route path='/relatorios/comercial' element={<Comercial />} />
                <Route path='/relatorios/estrategiaeprodutos' element={<Estrategia />} />
                <Route path='/relatorios/marketing' element={<Marketing />} />
                <Route path='/relatorios/operacional' element={<Operacional />} />
                <Route path='relatorios/rh' element={<RH />} />


            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;