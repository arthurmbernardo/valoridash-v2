import Header from '../header/Header';
import './Relatorio.css';


function Relatorio() {

    const showFrame = () => {
        const frame = document.getElementById('iframeContainer');
        if (frame) {
            document.getElementById('iframeContainer').id = 'visibleIframeContainer';
        } else {
            document.getElementById('visibleIframeContainer').id = 'iframeContainer';
        }
    };

    document.onkeydown = function (e) {
        if (e.ctrlKey) {
            return false;
        }
        if (e.key === 123 || e.key === 'F12') {
            return false;
        }
    };

    return (
        <div>
            <Header />
            <div className='relatoriosList'>
            <button onClick={showFrame}>Volumetria Macro_V3</button>
            <button onClick={showFrame}>RGV_Comercial_V4</button>
            <button onClick={showFrame}>Indicadores Retenção</button>
            </div>

            <div id='iframeContainer'>
            <iframe title="Volumetria Macro_V2" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=a86cc15f-8b35-4b58-88df-38807ec14e40&autoAuth=true&ctid=0a42edab-afcd-48af-a0b9-5b78edb164da" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Relatorio;