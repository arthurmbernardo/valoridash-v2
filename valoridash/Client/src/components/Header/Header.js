import './Header.css';

function Header() {
    const logOut = () => {
        localStorage.clear();
    }

    return (
        <div className='header'>
            <div className="img"></div>
            <nav>
                <a href='https://app.powerbi.com/groups/cd5c1504-0094-4563-956a-1eb907b99865/reports/a86cc15f-8b35-4b58-88df-38807ec14e40/ReportSection39b51cdb9d453683b1e0'>Volumetria Macro</a>
                <a href='https://app.powerbi.com/groups/me/reports/90c8a802-c30e-4012-98fa-995b8dead3aa/ReportSectionb621f12070647be09138'>RGV</a>
                <a href='https://app.powerbi.com/groups/me/reports/1a85635c-b5ed-4196-ac46-800fa68d946b/ReportSectioncadf65b2e36e59a9cb65'>Indicadores Retenção</a>
            </nav>
            <a href='/login' onClick={logOut}>Sair</a>
        </div>
    )
}

export default Header;