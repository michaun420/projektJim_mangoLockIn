import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";


function Calc(){

    const [waga, setWaga] = useState('')
    const [reps, setReps] = useState('')
    const [max, setMax] = useState(null)

    const max_rep = (e) =>{
        e.preventDefault();
        const parsedWaga = parseFloat(waga)
        const parsedReps = parseFloat(reps, 10)
        if (parsedWaga > 0 && parsedReps > 0){
            const result = parsedWaga * parsedReps * 0.0333 + parsedWaga
            setMax(result.toFixed(2))
        }
    }





    return <div className="main">
        <div className="calc">
            <form className="form" onSubmit={max_rep}>
            Podaj wagę:<br></br><br></br>
            <input type='number' value={waga} onChange={(e)=>setWaga(e.target.value)}></input><br></br><br></br>
            Podaj liczbę powtórzeń:<br></br><br></br>
            <input type='number' value={reps} onChange={(e)=>setReps(e.target.value)}></input><br></br><br></br>
            <button type="submit">Oblicz swojego maxa</button>
            </form>
            <div className="wynik">
                Twój szacowany 1RM: <br></br>{Math.round(max)}kg
            </div>
        </div>
    </div>
}
export default Calc