import styled from "styled-components"
import { Link } from "react-router-dom"

const StyleDiv = styled.div`
    background-color: #3B1E54;
    color: ivory;
    text-align: center;
    font-size: 30px;
    width: 50%;
    margin: 0 auto;
    border-radius: 40px;
`
const Menu = styled.div`
    background-color: #987ebd;
    text-align: left;
    width: 7%;
    height: 700px;
    float: left;
    border-radius: 20px;
    padding-left: 30px;
    padding-top: 30px;
    color: ivory;
`
const StyleButton = styled.button`
    background-color: EEEEEE;
    width: 100px;
    height: 200px;
`


function Home(){
    return <div><StyleDiv>Kalkulator zapotrzebowania kalorycznego</StyleDiv>
    <Menu>NAWIGATOR<br></br><br></br>
        <StyleButton>Kalkulator</StyleButton><br></br>
        <StyleButton>Autorska dieta 'Random'</StyleButton><br></br>
        <StyleButton>Ćwiczenia</StyleButton>
    
    </Menu>
    </div>
}
export default Home