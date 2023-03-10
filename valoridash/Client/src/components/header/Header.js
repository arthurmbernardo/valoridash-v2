import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className='header'>
            <div className="img" href='/'></div>
            <nav className='headerNav'>
                <a onClick={() => {navigate('/')}}>Home</a>
                <a onClick={() => {navigate('/relatorios')}}>Relatórios</a>
                <a onClick={() => {navigate('/calendar')}}>Calendário</a>
                <a onClick={() => {navigate('/register/user')}}>Cadastrar usuário</a>
            </nav>
            <a className='logoutButton' onClick={logOut}>Sair</a>
        </div>
    )
}

export default Header;