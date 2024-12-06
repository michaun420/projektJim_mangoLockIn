import styled from "styled-components"
import { Link, useNavigate,useOutlet } from "react-router-dom";
import ad from './imgs/trenwyprzedarz.gif'

const StyleButton = styled.button`
    background-color: #E2F1E7;
    width: 150px;
    height: 100px;
    border-radius: 20px;
`
const BackButton = styled.button`

`

function Main(){
    const outlet = useOutlet();
    return <div className="app">
        <div className="navbar"><div className="back"><Link to='/'><BackButton>Strona główna</BackButton></Link></div><div className="title">Fit Max</div></div>
            <div className="content">
                <ul className="sidemenu">
                <li><Link to='/calc'><StyleButton>Kalkulator maxów</StyleButton></Link><br></br></li>
                <li><Link to='/dishes'><StyleButton>Autorska dieta 'Random'</StyleButton></Link><br></br></li>      
                <li><Link to='/exercises'><StyleButton>Ćwiczenia</StyleButton></Link><br></br></li>
                </ul>
                {outlet ?? <div className="main"></div>}
                <div className="ad"> <a href="trening"><img src={ad} alt="ad" height='100%' width='252%' ></img></a></div>
            </div>
            <div className="footer">
                Stronę wykonał: Michał Nieradko i Maciej Wróblewski klasa V ET
            </div>
    </div>
}

export default Main