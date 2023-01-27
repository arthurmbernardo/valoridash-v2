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
                <a href=''>Notícias</a>
                <a href=''>Relatórios</a>
                <a href=''>Calendário</a>
                <a href='/register'>Cadastrar usuário</a>
            </nav>
            <a className='logoutButton' href='/login' onClick={logOut}>Sair</a>
        </div>
    )
}

export default Header;