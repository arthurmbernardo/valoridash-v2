import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import PrivateRoute from './components/PrivatesRouters/PrivateRoute';
import Atendimento from './components/relatorios/Atendimento';
import Comercial from './components/relatorios/Comercial';
import Estrategia from './components/relatorios/Estrategia';
import Financeiro from './components/relatorios/Financeiro';
import Marketing from './components/relatorios/Marketing';
import Operacional from './components/relatorios/Operacional';
import RH from './components/relatorios/RH';
import Relatorio from './components/relatorios/Relatorio';
import Geral from './components/relatorios/Geral';
import PrivateRouteAtendimento from './components/PrivatesRouters/PrivateRouteAtendimento';
import PrivateRouteComercial from './components/PrivatesRouters/PrivateRouteComercial';
import PrivateRouteEstrategia from './components/PrivatesRouters/PrivateRouteEstrategia';
import PrivateRouteFinanceiro from './components/PrivatesRouters/PrivateRouteFinanceiro';
import PrivateRouteMarketing from './components/PrivatesRouters/PrivateRouteMarketing';

function MyRouter() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/login' element={<Login />} />

                <Route path='/' element={
                    <PrivateRoute><Home /></PrivateRoute>
                } />

                <Route path='/register' element={
                    <PrivateRoute><Register /></PrivateRoute>
                } />

                <Route path='/relatorios' element={
                    <PrivateRoute><Relatorio /></PrivateRoute>
                } />

                <Route path='/relatorios/atendimento' element={
                    <PrivateRoute><PrivateRouteAtendimento><Atendimento /></PrivateRouteAtendimento></PrivateRoute>
                } />

                <Route path='/relatorios/comercial' element={
                    <PrivateRoute><PrivateRouteComercial><Comercial /></PrivateRouteComercial></PrivateRoute>
                } />

                <Route path='/relatorios/estrategiaeprodutos' element={
                    <PrivateRoute><PrivateRouteEstrategia><Estrategia /></PrivateRouteEstrategia></PrivateRoute>
                } />

                <Route path='/relatorios/financeiro' element={
                    <PrivateRoute><PrivateRouteFinanceiro><Financeiro /></PrivateRouteFinanceiro></PrivateRoute>
                } />

                <Route path='/relatorios/marketing' element={
                    <PrivateRoute><PrivateRouteMarketing><Marketing /></PrivateRouteMarketing></PrivateRoute>
                } />

                <Route path='/relatorios/operacional' element={<Operacional />} />
                <Route path='/relatorios/rh' element={<RH />} />
                <Route path='/relatorios/geral' element={<Geral />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter;