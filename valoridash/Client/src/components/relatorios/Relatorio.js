import Header from '../header/Header';
import './Relatorio.css';
import { useNavigate } from 'react-router-dom';


function Relatorio() {

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className='departmentList'>
                <button id='departmentButtonAtendimento' className='departmentButton' onClick={(e) => { navigate('/relatorios/atendimento') }}>Atendimento</button>
                <button id='departmentButtonComercial' className='departmentButton' onClick={(e) => { navigate('/relatorios/comercial') }}>Comercial</button>
                <button id='departmentButtonEstrategia' className='departmentButton' onClick={(e) => { navigate('/relatorios/estrategiaeprodutos') }}>Estratégia e Produtos</button>
                <button id='departmentButtonFinanceiro' className='departmentButton' onClick={(e) => { navigate('/relatorios/financeiro') }}>Financeiro</button>
                <button id='departmentButtonGeral' className='departmentButton' onClick={(e) => { navigate('/relatorios/geral') }}>Geral</button>
                <button id='departmentButtonMarketing' className='departmentButton' onClick={(e) => { navigate('/relatorios/marketing') }}>Marketing</button>
                <button id='departmentButtonOperacional' className='departmentButton' onClick={(e) => { navigate('/relatorios/operacional') }}>Operacional</button>
                <button id='departmentButtonRH' className='departmentButton' onClick={(e) => { navigate('/relatorios/rh') }}>RH</button>
            </div>
        </div>
    )
}

export default Relatorio;