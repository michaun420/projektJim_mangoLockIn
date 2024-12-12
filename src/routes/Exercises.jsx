import { Link, Outlet, useNavigate } from "react-router-dom";
import React, {useState} from "react";

function Exercises(){

    const [cwiczenia, setCwiczenia] = useState([])
    const [input, setInput] = useState('')

    function handleChange(e){
        if(e.target.value != null){
        setInput(e.target.value)}
    }
    function handleSubmit(e){
        e.preventDefault()
        setCwiczenia([...cwiczenia, input])
        setInput('')
    }
    function handleDelete(index){
        const newCwicz = [...cwiczenia]
        newCwicz.splice(index, 1)
        setCwiczenia(newCwicz)
    }


    return <div className="main">
        <h1>Lista sprawdzonych ćwiczeń</h1>
        <form>
            <input type="text" value={input} onChange={handleChange}></input><button className="przycisk" onClick={handleSubmit}>Dodaj ćwiczenie</button>
        </form>
            {cwiczenia.map((cwicz, index) => (
                <div className="cwicz" key={cwicz}>{cwicz}<br></br>
                <button onClick={handleDelete}>USUŃ</button></div>
            ))}
    </div>
}
export default Exercises