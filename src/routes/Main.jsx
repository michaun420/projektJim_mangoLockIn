import styled from "styled-components"
import { Link, useNavigate,useOutlet } from "react-router-dom";
import ad from './imgs/trenwyprzedarz.gif'
import arnold from './imgs/arnold.jpg'

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
                {outlet ?? <div className="main">
                    <div className="mainLeft">
                        <h1>TWOJA SIŁA - TWÓJ WYBÓR</h1>
                    </div>
                    <div className="mainRight">
                        <img src={arnold} height="600px" width="400px"></img>
                    </div>
                    </div>}
                <div><a href="trening"><img className="ad" src={ad} alt="ad"></img></a></div>
            </div>
            <div className="footer">
                Stronę wykonał: Michał Nieradko i Maciej Wróblewski klasa V ET
            </div>
    </div>
}

export default Main