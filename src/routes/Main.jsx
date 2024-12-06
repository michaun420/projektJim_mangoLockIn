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
                <li><Link to='/calc'><StyleButton>Kalkulator</StyleButton></Link><br></br></li>
                <li><Link to='/dishes'><StyleButton>Autorska dieta 'Random'</StyleButton></Link><br></br></li>      
                <li><Link to='/exercises'><StyleButton>Ćwiczenia</StyleButton></Link><br></br></li>
                </ul>
                {outlet ?? <div className="main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet laoreet ligula eleifend bibendum. Cras tincidunt marcu rhoncus, gravida eros eu, bibendum enim. Praesent metus quam, volutpat vitae cursus sit amet, hendrerit at ante.Aenean sodales metus nec augue bibendum rhoncus. Duis tincidunt venenatis nisi, lobortis porttitor magna rhoncus non. Cras eros massa, suscipit a odio vitae, vehicula ultrices leo. Morbi quis enim feugiat, rutrum risus in, elementum dui. Proin tincidunt, orci eget condimentum eleifend, sapien nisl commodo tortor, a facilisis lacus nisl sed leo. Mauris in dolor sapien. Cras ullamcorper dolor orci, ac congue felis viverra vel. Ut elementum turpis tortor, nec vestibulum eros sollicitudin bibendum.</div>}
                <div className="ad"><img src={ad} alt="ad" height='100%' width='252%'></img></div>
            </div>
            <div className="footer">
                Stronę wykonał: Michał Nieradko i Maciej Wróblewski klasa V ET
            </div>
    </div>
}

export default Main