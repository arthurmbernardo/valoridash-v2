import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
    }

    return (
        <div className='header'>
            <div className="img" href='/'></div>
            <nav className='headerNav'>
                <a href='/'>Home</a>
                <a href='/relatorios'>Relatórios</a>
                <a href='/calendario'>Calendário</a>
                <a href='/register/user'>Cadastrar usuário</a>
            </nav>
            <a className='logoutButton' href='/login' onClick={logOut}>Sair</a>
        </div>
    )
}

export default Header;